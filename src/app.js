import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import modules from './modules';

const app = express();

app.use(cors());
app.use(logger('dev'));
// body parser for url params and json
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
}));
app.use(bodyParser.json());
// set base url for api
modules(app);

// catch all routes
app.use('*', (req, res) => res.status(404).json({
  message: 'Not Found. Use /api/v1 to access the API',
}));

export default app;
