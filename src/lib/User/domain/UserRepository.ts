import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository {
  create(user: User): Promise<void>; 
  getAll(): Promise<User[]>;  /*Me trae un array de usuarios de nuestro dominio*/ 
  getOneById(id: UserId): Promise<User | null>;
  edit(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}
