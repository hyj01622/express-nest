import * as express from 'express';
import { Cat } from './app.model';

const app: express.Express = express();
const port = 8000;

//* logging middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next();
});

//* Read
app.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    res.status(200).json({
      data: {
        cats,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send({
        error: err.message,
      });
    }
  }
});

//* Read 특정 고양이 데이터 조회
app.get('/cats/:id', (req, res) => {
  try {
    const id = req.params.id;
    const cats = Cat.find((cat) => {
      return cat.id === id;
    });
    res.status(200).json({
      data: {
        cats,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send({
        error: err.message,
      });
    }
  }
});

//* 404 middleware
app.use((req, res, next) => {
  res.status(404).json({ error: '404 not found error' });
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
