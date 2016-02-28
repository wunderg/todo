module.exports = (app, express) => {
  var taskRouter = express.Router();

  app.use('api/task', taskRouter);

  var check = (req, res, next) => {
    res.json('Works');
  }

  taskRouter.get('/', check)
}
