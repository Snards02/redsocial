
import { Request, Response } from 'express';
import Post from '../models/post';

class PostController {
  public async createPost(_req: Request, res: Response): Promise<void> {
    try {
      const { title, content, userId } = _req.body;
      const newPost = new Post({ title, content, userId });
      await newPost.save();
      res.status(201).json({ message: 'Publicación creada exitosamente' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getAllPosts(_req: Request, res: Response): Promise<void> {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getPostById(_req: Request, res: Response): Promise<void> {
    try {
      const post = await Post.findById(_req.params.postId);
      if (!post) {
        res.status(404).json({ message: 'Publicación no encontrada' });
        return;
      }
      res.status(200).json(post);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async updatePost(_req: Request, res: Response): Promise<void> {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        _req.params.postId,
        _req.body,
        { new: true }
      );
      if (!updatedPost) {
        res.status(404).json({ message: 'Publicación no encontrada' });
        return;
      }
      res.status(200).json(updatedPost);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deletePost(_req: Request, res: Response): Promise<void> {
    try {
      const deletedPost = await Post.findByIdAndDelete(_req.params.postId);
      if (!deletedPost) {
        res.status(404).json({ message: 'Publicación no encontrada' });
        return;
      }
      res.status(200).json({ message: 'Publicación eliminada exitosamente' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default PostController;
