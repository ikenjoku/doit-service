import express from 'express';
import TodoController from './TodoController';

const Router = express.Router();

Router.get(
  '/todos',
  TodoController.fetchTodos,
);


export default Router;
