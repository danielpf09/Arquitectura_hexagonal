import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetAll {
  constructor(private repository: UserRepository) {}

  async run(): Promise<User[]> {
    // Retorna todos los usuarios almacenados en la base de datos
    return this.repository.getAll();
  }
}
