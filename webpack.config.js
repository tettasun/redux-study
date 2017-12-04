module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './dist/',
    filename: 'index.js',
    publicPath: '/dist/'
  },
  resolve: {
  extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc.rc',
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port: 8080,
    inline: true,
    setup: (app) => {
//       app.get("/mock/json", (req, res, next) => {
//         // req: Node.js http.ClientRequest;
//         // res: Node.js http.ServerResponse;
//         // next: () => void;
//         var jj = require('./sample.json');
//         console.log(jj);
//         var json = "{ hoge : 'huga' }";
//         //res.setHeader("some", "header");
//         res.end(json);
// //        res.end("" + jj);
//       });
    }
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },
      { test: /\.js$/|/\.jsx$/,
       exclude: /node_modules/,
       loader: 'babel' ,
      query: {
        plugins: ["transform-react-jsx"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
      }},
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.css$/,loaders:['style', 'css?modules']}
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
