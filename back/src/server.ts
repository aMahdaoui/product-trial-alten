import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import router from './router';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', router);

// catch errors default express error handler
app.use((err, req, res, next) => {
  process.env.NODE_ENV === 'dev' && console.log(err);
  const error = `Error catched in middleware: ${
    process.env.NODE_ENV === 'dev' ? err.message : 'Error'
  }`;
  res.json({ message: `had an error: ${error}` });
});

export default app;
