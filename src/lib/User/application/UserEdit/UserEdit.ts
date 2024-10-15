import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserRepository } from "../../domain/UserRepository";

export class UserEdit {
  constructor(private repository: UserRepository) {}

  async run(
    id: string,
    name: string,
    email: string,
    createdAt: Date
  ): Promise<void> {
    // Crea una nueva instancia de "User" con los datos modificados
    //Se piden los datos
    const user = new User(
      new UserId(id),          // El ID del usuario existente
      new UserName(name),      // El nuevo nombre del usuario
      new UserEmail(email),    // El nuevo correo electrónico
      new UserCreatedAt(createdAt)  // La nueva fecha de creación
    );

    // Actualiza al usuario en la base de datos mediante el repositorio
    return this.repository.edit(user);
  }
}
