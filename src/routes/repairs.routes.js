import { Router } from 'express';
import {
  getRepairs,
  createRepair,
  updateRepair,
  deleteRepair,
  getRepair,
} from '../controllers/repairs.controllers.js';

const router = Router();

//ruta raiz: '/api/v1/repairs'
router.route('/').get(getRepairs).post(createRepair);

router.route('/:id').get(getRepair).patch(updateRepair).delete(deleteRepair);

export default router;
