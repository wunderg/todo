import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  id: {
    type: Number,
    required: false
  }
});

export default mongoose.model('task', taskSchema);
