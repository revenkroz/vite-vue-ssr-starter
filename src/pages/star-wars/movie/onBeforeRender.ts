import { filterMovieData } from '../filterMovieData'
import type { MovieDetails } from '../types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { $fetch } from "ohmyfetch";

export { onBeforeRender }

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  let movie = (await $fetch(`https://star-wars.brillout.com/api/films/${pageContext.routeParams.movieId}.json`)) as MovieDetails

  // We remove data we don't need because we pass `pageContext.movie` to
  // the client; we want to minimize what is sent over the network.
  movie = filterMovieData(movie)

  // The page's <title>
  const { title } = movie

  return {
    pageContext: {
      pageProps: {
        movie,
      },
      documentProps: {
        // The page's <title>
        title,
      },
    },
  }
}
