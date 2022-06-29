import * as express from 'express';
import catsRouter from './cats/cats.route';

const app: express.Express = express();
const port = 8000;

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    //* router middleware
    this.app.use(catsRouter);
  }

  private setMiddlaware() {
    //* json middleware
    this.app.use(express.json());

    //* logging middleware
    this.app.use((req, res, next) => {
      // console.log('logging middleware');
      next();
    });

    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      res.status(404).json({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddlaware();
    this.app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  }
}

const init = () => {
  const server = new Server();
  server.listen();
};

init();
