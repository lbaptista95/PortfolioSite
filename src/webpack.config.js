const path = require('path');

module.exports = {
  entry: './src/index.js', // ponto de entrada do seu aplicativo
  output: {
    filename: 'bundle.js', // nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), 
    publicPath: '/<repository>/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // arquivos JavaScript
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/, // arquivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // arquivos de imagem
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
};
