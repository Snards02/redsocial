import { Router, Request, Response } from 'express';
import UserController from '../controllers/userController';
import {verifyToken} from '../middleware/verifyToken';

const router: Router = Router();
const userController = new UserController();

// Rutas para operaciones de usuario
router.post('/register', (req: Request, res: Response) => {
  userController.register(req, res);
});

router.post('/login', (req: Request, res: Response) => {
    console.log("entra rutas")
  userController.login(req, res);
});

router.get('/', (req: Request, res: Response) => {
  userController.getAllUsers(req, res);
});

router.get('/:userId', verifyToken, (req: Request, res: Response) => {
  userController.getUserById(req, res);
});

router.put('/:userId', verifyToken, (req: Request, res: Response) => {
  userController.updateUser(req, res);
});

router.delete('/:userId', verifyToken, (req: Request, res: Response) => {
  userController.deleteUser(req, res);
});

export default router;
