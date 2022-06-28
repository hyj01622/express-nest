import * as express from 'express';

const app: express.Express = express();
const port = 8000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.json({ name: 'yeojin' });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
