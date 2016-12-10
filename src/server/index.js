import express from 'express';
import path from 'path';
import webpack from 'webpack';

import messagesRouter from './routers/messages';
// import WebpackDevServer from 'webpack-dev-server';

const appConfig = {
  port: process.env.PORT || 3000,
  devPort: process.env.PORT + 1 || 3001,
  host: process.env.HOST || 'localhost'
}

const app = express();
app.set('port', appConfig.port);
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  const webpackConfig = require('../../webpack.config.js');
  let compiler = webpack(webpackConfig);
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }))
  app.use(require("webpack-hot-middleware")(compiler));
  // new webpackDevServer(compiler, webpackConfig.devServer)
  //   .listen(appConfig.devPort, err => {
  //     console.error(err);
  //   })
}

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use('/messages', messagesRouter);
// app.get('/', (req, res) => {
//   res.send('<h1>Hi</h1>');
// })


export default app;
