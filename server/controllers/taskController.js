import Task from './taskModel';

export default {
  get(req, res) {
    Task
      .find({})
      .exec()
      .then(task => res.json(task));
  },

  post(req, res) {
    const { id, text, completed } = req.body;

    new Task({
      id,
      text,
      completed
    })
    .save()
    .then(result => res.json(result));
  }
};
