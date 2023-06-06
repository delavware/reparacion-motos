import { Router } from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  getUser,
  deleteUser,
  getUsersRepairs,
} from '../controllers/users.controllers.js';

const router = Router();

//ruta raiz: '/api/v1/users'
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

router.get('/:id/repairs', getUsersRepairs);

export default router;
