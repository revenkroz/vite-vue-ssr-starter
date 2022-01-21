import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import WindiCSS from 'vite-plugin-windicss';
import ViteSvgIcons from 'vite-plugin-svg-icons';
import yaml from '@rollup/plugin-yaml';
import { UserConfig } from 'vite'
import path from "path";
import { minifyHtml } from "vite-plugin-html";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import styleImport, { ElementPlusResolve } from 'vite-plugin-style-import'

const config: UserConfig = {
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    ssr(),
    AutoImport({
      imports: [
        // presets
        'vue',
        '@vueuse/head',
      ],
      dts: 'src/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'js'],
      dts: 'src/components.d.ts',
      // https://github.com/element-plus/element-plus/issues/4923
      // resolvers: [ElementPlusResolver()],
    }),
    WindiCSS(),
    ViteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
    minifyHtml(),
    yaml(),
    styleImport({
      resolves:[
        ElementPlusResolve(),
      ],
    })
  ],
  clearScreen: false,
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    }
  },
}

export default config
