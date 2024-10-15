//Se importan los atributos del Usuario del Dominio
import { User } from "../../domain/User";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { UserRepository } from "../../domain/UserRepository";

export class UserCreate {

  constructor(private repository: UserRepository) {}
  // Creación de una nueva instancia del dominio "User"
  //Piden los datos
  async run(
    id: string,
    name: string,
    email: string,
    createdAt: Date
  ): Promise<void> {
    const user = new User(
      new UserId(id),          // Creación de un ID único para el usuario
      new UserName(name),      // Asignación de un nombre al usuario
      new UserEmail(email),    // Asignación de un email al usuario
      new UserCreatedAt(createdAt)  // Fecha de creación del usuario
    );

    return this.repository.create(user);
  }
}
