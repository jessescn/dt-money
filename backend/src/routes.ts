import { Router } from 'express'
import { UsersController } from './controllers/UsersController';

import { AuthMiddle } from './middlewares/auth'

const routes = Router();

const usersController = new UsersController();

routes.post("/register", usersController.register)
routes.post("/login", usersController.login)

routes.get("/check", AuthMiddle, (req, res) => {
  return res.json({ status: "authorized" })
})

export { routes }