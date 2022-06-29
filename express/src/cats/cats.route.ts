import { Router } from 'express';
import { readAllCat, readCat, createCat, putCat, patchCat, deleteCat } from './cats.services';

const router = Router();

router.get('/cats/', readAllCat);
router.get('/cats/:id/', readCat);
router.post('/cats/', createCat);
router.put('/cats/:id', putCat);
router.patch('/cats/:id', patchCat);
router.delete('/cats/:id', deleteCat);

export default router;
