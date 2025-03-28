const path = require('path'); // Built-in module to handle file paths
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generates index.html automatically

module.exports = {
  mode: 'development', // "development" for fast builds, "production" for optimized output

  entry: './src/index.js', // The starting file for Webpack to bundle

  output: {
    filename: 'bundle.js', // The name of the output file
    path: path.resolve(__dirname, 'dist'), // The output folder (absolute path)
    clean: true, // Deletes old files in dist when building
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Any file ending in .css
        use: ['style-loader', 'css-loader'], // Loaders to handle CSS files
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Any image file format
        type: 'asset/resource', // Tells Webpack to copy these files to "dist"
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Uses your HTML file as a template
    }),
  ],

  devServer: {
    static: './dist', // Serve files from the "dist" folder
    open: true, // Automatically opens the browser when running the server
    hot: true, // Enables hot reloading (refresh without losing state)
  },
};
