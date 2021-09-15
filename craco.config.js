// craco.config.js
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          cssnano({
            preset: 'default'
          }),
          purgecss({
            content: ['./public/*.html'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        ],
      },
    },
  }