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
  // ... existing loader config ...
]