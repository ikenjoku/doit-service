import express from 'express';
import tokenizer from '../../helpers/tokenizer';
import TodoController from './TodoController';

const Router = express.Router();

Router.get(
  '/todos',
  tokenizer.verifyToken,
  TodoController.fetchTodos,
);


export default Router;
