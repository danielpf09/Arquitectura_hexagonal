import { UserId } from "../../domain/UserId";
import { UserRepository } from "../../domain/UserRepository";

export class UserDelete {
  constructor(private repository: UserRepository) {}

  async run(id: string): Promise<void> {
    // Elimina al usuario con el ID proporcionado utilizando el repositorio
    await this.repository.delete(new UserId(id));
  }
}
