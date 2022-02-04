import { createPageRenderer } from 'vite-plugin-ssr'
import * as vite from 'vite'
import Fastify from 'fastify'
import middie from 'middie'
import cookie from 'fastify-cookie'
import fastifyStatic from 'fastify-static'
import path from 'path';
import { fileURLToPath } from 'url';

const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;
const isProduction = process.env.NODE_ENV === 'production'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer(root = process.cwd()) {
  const app = Fastify({ logger: false })

  await app.register(cookie)

  let viteDevServer
  if (isProduction) {
    await app.register(fastifyStatic, {
      root: path.join(__dirname, '..', `dist/client/`),
      prefix: '/',
      wildcard: false, // https://github.com/fastify/fastify-static/pull/83/files
    })
  } else {
    viteDevServer = await vite.createServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          usePolling: true,
          interval: 100
        }
      }
    });
    await app.register(middie)
    app.use(viteDevServer.middlewares)
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root })
  app.get('*', async (req, res) => {
    const pageContext = await renderPage({
      url: req.url,
      // ...
    })
    const { httpResponse } = pageContext
    if (!httpResponse) return res.send()

    const stream = await httpResponse.getNodeStream()
    const { statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType)

    res.send(stream)
  })

  return { app }
}

if (!isTest) {
  const host = '127.0.0.1'
  const port = 3000

  startServer().then(({ app }) =>
      app.listen(port, host, () => {
        console.log(`http://${host}:${port}`);
      })
  );
}

