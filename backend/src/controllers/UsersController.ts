import { Request, Response } from 'express'
import { UserService } from '../services/UsersService';
import { compareSync, hashSync } from 'bcrypt';
import jwt from 'jsonwebtoken'

class UsersController {

  async register(request: Request, response: Response): Promise<Response>{
    const userService = new UserService();
    const { name, email, password } = request.body;

    const userExists = await userService.findByEmail(email);

    if(userExists){
      return response.json(userExists);
    }

    const encryptedPassword = hashSync(password, 10);

    const user = await userService.create({
      name,
      email,
      password: encryptedPassword
    })

    return response.json(user);
  }

  async login(request: Request, response: Response){
    const { email, password } = request.body;
    const userService = new UserService();

    const user = await userService.findByEmail(email);

    if(!user){
      return response.status(404).json({ "error": "User not found." })
    }

    if(!compareSync(password, user.password)){
      return response.status(401).json({ "error": "invalid credentials" })
    }

    // gerar o token aqui
    const privateKey = process.env.JWT_SECRET;
    const { id } = user; 
    const token = jwt.sign({ id }, privateKey, { expiresIn: 300 })

    return response.json({ token })
  }

}

export { UsersController }