import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import bodyParser from 'body-parser';
import webpackConfig from '../webpack-config.js';

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;
const port = isProduction ? (process.env.PORT || 80) : 3000;

const app = express();

const staticPath = path.join(__dirname, '../');

app.use(bodyParser());

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

  devServer.listen(3001, 'localhost', err => {
    if (err) {
      console.log(err);
    }
    console.log('DevServer at 3001');
  });
}
