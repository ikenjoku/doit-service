import express from 'express';
import middleware from  '../../middlewares';
import TodoController from './TodoController';

const Router = express.Router();

Router.get(
  '/todos',
  TodoController.fetchTodos,
);


export default Router;