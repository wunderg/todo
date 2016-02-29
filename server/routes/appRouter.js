module.exports = (app, express, staticPath) => {
  var appRouter = express.Router();

  app.use('/', appRouter);

  appRouter.get('/about', (req, res) => {
    res.sendFile('index.html', {
      root: staticPath
    });
  });
};
