import mongoose from 'mongoose';


const TodoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
