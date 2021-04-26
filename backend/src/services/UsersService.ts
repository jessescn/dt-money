import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateProps {
  name: string;
  email: string;
  password: string;
}

class UserService {

  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ email, name, password }: ICreateProps){
    const userExists = await this.usersRepository.findOne({ email });

    if(userExists){
      return userExists;
    }

    const user = this.usersRepository.create({
      name,
      email,
      password
    })

    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string){
    const user = await this.usersRepository.findOne({ email });
    return user;
  }

}

export { UserService }