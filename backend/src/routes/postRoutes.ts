import { Router, Request, Response } from 'express';
import PostController from '../controllers/postController';
import {verifyToken} from '../middleware/verifyToken';

const router: Router = Router();
const postController = new PostController();

// Rutas para operaciones de posts
router.post('/', (req: Request, res: Response) => {
  postController.createPost(req, res);
});

router.get('/', (req: Request, res: Response) => {
  postController.getAllPosts(req, res);
});

router.get('/:postId', verifyToken, (req: Request, res: Response) => {
  postController.getPostById(req, res);
});

router.put('/:postId', verifyToken, (req: Request, res: Response) => {
  postController.updatePost(req, res);
});

router.delete('/:postId', verifyToken, (req: Request, res: Response) => {
  postController.deletePost(req, res);
});

export default router;
