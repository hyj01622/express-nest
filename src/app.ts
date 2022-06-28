import * as express from 'express';
import catsRouter from './cats/cats.route';

const app: express.Express = express();
const port = 8000;

//* json middleware
app.use(express.json());

//* logging middleware
app.use((req, res, next) => {
  // console.log('logging middleware');
  next();
});

//* router middleware
app.use(catsRouter);

//* 404 middleware
app.use((req, res, next) => {
  res.status(404).json({ error: '404 not found error' });
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
