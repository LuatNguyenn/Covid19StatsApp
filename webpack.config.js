var path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devtool: 'source-map',
  module: {
    rules: [
    //     {
    //     test: /\.scss$/,
    //     use: [{
    //         loader: "style-loader"
    //       },
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           minimize:true
    //         }
    //       },
    //       {loader:'sass-loader'}
    //     ]
    //   },
      {
         test: /\.ts$/,
         loader: "ts-loader"
       }
    ]
  },
  
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },

  plugins: [
    new CleanPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Webpack Config',
      template: './src/index.html',
    }),
    new WebpackPwaManifest({
      name: 'Webpack Config',
      short_name: 'WpConfig',
      description: 'Example Webpack Config',
      background_color: '#ffffff'
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    })
  ]
};
