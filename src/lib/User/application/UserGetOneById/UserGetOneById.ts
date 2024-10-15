import { User } from "../../domain/User";
import { UserId } from "../../domain/UserId";
import { UserNotFoundError } from "../../domain/UserNotFoundError";
import { UserRepository } from "../../domain/UserRepository";

export class UserGetOneById {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<User> {
    // Busca al usuario en la base de datos usando su ID
    const user = await this.repository.getOneById(new UserId(id));

    // Si el usuario no es encontrado, lanza un error
    if (!user) throw new UserNotFoundError("User not found");

    // Retorna el usuario si fue encontrado
    return user;
  }
}
