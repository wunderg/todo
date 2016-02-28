import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack-config.js';

import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';

import Router from './router';


const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();

// Router(app, express);

/* Webpack Config */
if (isDeveloping) {
  const WEBPACK_PORT = 3001;
  const compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      color: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.listen(WEBPACK_PORT, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`WebpackDevServer listening at port ${WEBPACK_PORT}`);
  });
}


/* API config */
const publicPath = path.resolve(__dirname, '../');
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static(publicPath));

const port = isProduction ? (process.env.PORT || 80) : 3000;




{/*  API Routes */}
app.get('*', (request, response) => {
  console.log(request);
  response.sendFile(path.resolve(__dirname, '../', 'index.html'));
});



/*  Basic HTTP Proxy to pass thru websockets requests*/
const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server running on port ${port}`);
});
