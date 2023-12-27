import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const TOKEN_KEY: string = 'ABCDEF-KEY'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;
    let token = bearer?.replace("Bearer ",'')
    console.log("verifytoken",token);
    
  if (!token) {
    return res.status(403).json({ message: 'Token de autenticación no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, TOKEN_KEY );
    // Añadir el usuario decodificado al objeto request para acceder en rutas posteriores
    (req as any).user = decoded;

    next();
    return null
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};