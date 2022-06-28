import { Router } from 'express';
import { Cat } from './cats.model';

const router = Router();

//* Read 전체 고양이 데이터 조회
router.get('/cats/', (req, res) => {
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
router.get('/cats/:id/', (req, res) => {
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

//* Create 새로운 고양이 추가
router.post('/cats/', (req, res) => {
  try {
    const data = req.body;
    Cat.push(data);
    res.status(200).json({
      data: { data },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send({
        error: err.message,
      });
    }
  }
});

export default router;
