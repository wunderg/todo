import Task from './taskModel';

export default {
  get(req, res) {
    Task
      .find({})
      .exec()
      .then(task => res.json(task));
  },

  post(req, res) {
    const { _id, text, completed } = req.body;
    console.log(req.body);

    new Task({
      text,
      completed
    })
    .save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
  }
};
