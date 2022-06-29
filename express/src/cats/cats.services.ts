import { Request as Req, Response as Res } from 'express';
import { Cat } from './cats.model';

//* READ 전체 고양이 데이터 조회
export const readAllCat = (req: Req, res: Res) => {
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
};

//* READ 특정 고양이 데이터 조회
export const readCat = (req: Req, res: Res) => {
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
};

//* CREATE 새로운 고양이 추가
export const createCat = (req: Req, res: Res) => {
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
};

//* UPDATE 고양이 데이터 업데이트 -> PUT
export const putCat = (req: Req, res: Res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).json({
      data: {
        cat: result,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send({
        error: err.message,
      });
    }
  }
};

//* UPDATE 고양이 데이터 업데이트 -> PATCH
export const patchCat = (req: Req, res: Res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).json({
      data: {
        cat: result,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send({
        error: err.message,
      });
    }
  }
};

//* UPDATE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Req, res: Res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).json({
      data: newCat,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send({
        error: err.message,
      });
    }
  }
};
