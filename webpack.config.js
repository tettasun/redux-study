module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: 'index.js',
    publicPath: '/dist/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port: 8080,
    inline: true,
    setup: (app) => {
      app.get("/mock/json", (req, res, next) => {
        // req: Node.js http.ClientRequest;
        // res: Node.js http.ServerResponse;
        // next: () => void;
        var json = "{ hoge : 'huga' }";
        //res.setHeader("some", "header");
        res.end(json);
      });
    }
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
