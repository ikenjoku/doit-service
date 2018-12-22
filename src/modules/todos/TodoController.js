class TodoController {
  static async fetchTodos(req, res) {
    console.log(req.user);
    return res.status(200).json({
      success: true,
      message: 'It is working',
    });
  }
}

export default TodoController;
