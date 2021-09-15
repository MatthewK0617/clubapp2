// craco.config.js
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