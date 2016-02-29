module.exports = (app, express) => {
  var apiRouter = express.Router();

  app.use('/api', apiRouter);

  apiRouter.get('/task', (req, res) => {
    res.json({ work: 'yes' });
  });
};
