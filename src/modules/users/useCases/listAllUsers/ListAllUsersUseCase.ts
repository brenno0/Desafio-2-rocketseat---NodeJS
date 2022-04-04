import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
   const user = this.usersRepository.findById(user_id)
   if(!user){
     throw new Error("User does not exists.")
   }
   if(!user.admin){
    throw new Error("Sorry,you don't have the permission to execute this action.")
  }
  
   if(user.admin){
     const usersList = this.usersRepository.list();
    return usersList
   }
  }
}

export { ListAllUsersUseCase };
