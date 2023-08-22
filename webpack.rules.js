module.exports = [
  // ... existing loader config ...
  {
    test: /\.jsx?$/,
    use: {
      loader: 'babel-loader',
      options: {
        exclude: /node_modules/,
        presets: ['@babel/preset-react']
      }
    }
  },

  {
    test: /\.(png|jp(e*)g|svg|gif)$/,
    type: "asset/resource",
  },

  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
  // ... existing loader config ...
]