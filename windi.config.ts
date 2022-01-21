import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{vue,js,ts}'],
    exclude: ['node_modules', '.git', 'excluded', 'dist', 'windi.config.{ts,js}'],
  },
  darkMode: 'class',
  safelist: 'select-none',
  shortcuts: {
    'm-pd': 'px-4 md:px-0',
  },
  theme: {
    extend: {
      screens: {
        '2xl': '1280px',
      },
      fontFamily: {
        body: ['"Roboto"', 'Verdana', 'sans-serif'].join(','),
        sans: ['"Roboto"', 'Verdana', 'sans-serif'].join(','),
      },
      colors: {
        primary: {
          50: '#f1f3f6',
          100: '#ccedff',
          200: '#76b9fd',
          300: '#5aa7f5',
          400: '#4793de',
          500: '#438fd5',
          600: '#2d6496',
          700: '#21486e',
          800: '#12395b',
          900: '#0f202f',
        },
      },
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
  ]
})
