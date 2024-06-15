import { Router } from 'express';
import { getAllUsersController, getUserByIdController, createUserController, validateLoginController } from '../controllers/userController';

const router = Router();

// router.get('/users', getAllUsersController);
// router.get('/users/:id', getUserByIdController);
// router.post('/users/register', createUserController);
//falta ruta de login 

router.get('/users', getAllUsersController);
router.get('/user/:id', getUserByIdController);
router.post('/user/register', createUserController);
router.post('/users/login', validateLoginController)
export default router;
