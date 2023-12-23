import { Request, Response } from 'express';
import User from '../models/user';
import jwt from "jsonwebtoken";
import { TOKEN_KEY }  from "../middleware/verifyToken";

class UserController {
  public async register(_req: Request, res: Response): Promise<void> {
    try {
      const { fullName, age, email, password } = _req.body;
      const newUser = new User({ fullName, age, email, password });
      await newUser.save();
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async login(_req: Request, res: Response): Promise<void> {
    console.log("entra", _req)
    const email = _req.body.email;
    const psw = _req.body.password
    let user = await this.getUserByEmailbyPsw(email,psw)
    if (user) {
        const token = jwt.sign(
            {userID:user.id, email:user.email},
            TOKEN_KEY
        );
        let respuesta = {... user, token}
        res.status(200).json(respuesta)
    } else {
        res.status(400).send("credenciales incorrectas")
    }

  }


  public async getAllUsers(_req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getUserByEmailbyPsw(email: string, pws:string): Promise<any> {
    try {
      const user = await User.find({"email":email, "password":pws});
      if (!user) {
        return false ;
      }
      return user;
    } catch (error: any) {
      return  error.message;
    }
  }

  public async getUserById(_req: Request, res: Response): Promise<void> {
    try {
      const user = await User.findById(_req.params.userId);
      if (!user) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async updateUser(_req: Request, res: Response): Promise<void> {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        _req.params.userId,
        _req.body,
        { new: true }
      );
      if (!updatedUser) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json(updatedUser);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async deleteUser(_req: Request, res: Response): Promise<void> {
    try {
      const deletedUser = await User.findByIdAndDelete(_req.params.userId);
      if (!deletedUser) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
      }
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
