module.exports = {
      entry: './app/index.js',
      output: {
          path: __dirname,
          filename: "bundle.js"
      },
      module: {
          loaders: [
              {
                  test: '/\.js$/',
                  exclude: '/node_modules',
                  loader: 'babel-loader'
              },
              {
                  test: '/\.css$/',
                  exclude: '/node_modules',
                  loader: 'css-loader!style-loader'
              },
              {
                  test:/\.html$/,
                  exclude: '/node_modules',
                  loader: 'raw-loader'
              }
          ]
      }

};