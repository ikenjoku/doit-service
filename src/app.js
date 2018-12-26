import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import modules from './modules';

dotenv.config();

const app = express();

app.use(cors());
app.use(logger('dev'));
// body parser for url params and json
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
}));
app.use(bodyParser.json());
// connect to db
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost:27017/do-it', { useNewUrlParser: true });
}
// set base url for api
modules(app);

// catch all routes
app.use('*', (req, res) => res.status(404).json({
  message: 'Not Found. Use /api/v1 to access the API',
}));

export default app;
