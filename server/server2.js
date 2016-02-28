import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import bodyParser from 'body-parser';
import webpackConfig from '../webpack-config.js';
import cors from 'express-cors';
import proxy from 'http-proxy-middleware';

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;
const port = isProduction ? (process.env.PORT || 80) : 3000;

const app = express();

const staticPath = path.join(__dirname, '../');

app.use(bodyParser());
app.use(cors());

app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: staticPath
  });
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log('Server at 3001');
});

if (isDeveloping) {
  var options = {
    target: 'http://localhost:3000', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    proxyTable: {
      'http://localhost:8080': 'http://localhost:3000'
    }
  };

  var myproxy = proxy('/sockjs-node', options);
  app.use(myproxy);
  const devServer = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    inline: true,
    hot: true,
    quiet: false,
    noInfo: false,
    stats: { colors: true },
    proxy: [{
      path: /\api(.*)/,
      target: 'http://localhost: 3000'
    }]
  });

  devServer.use(cors());

  devServer.listen(3001, 'localhost', err => {
    if (err) {
      console.log(err);
    }
    console.log('DevServer at 3001');
  });
}
