import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const AuthMiddle = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization
  const secret = process.env.JWT_SECRET

  if(!token){
    return res.status(401).json({ error: "No token provided."})
  }

  jwt.verify(token, secret, (err, decoded) => {
    if(err){
      return res.status(401).json({ error: "Invalid token." })
    }

    next()
  })
}

export { AuthMiddle }