import todoRouter from './todos';

const apiPrefix = '/api/v1';

const routes = (app) => {
  app.use(apiPrefix, todoRouter);

  return app;
};

export default routes;