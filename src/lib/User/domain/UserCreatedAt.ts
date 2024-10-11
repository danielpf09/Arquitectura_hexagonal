export class UserCreatedAt {
  value: Date;

  constructor(value: Date) {
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid() {
    if (this.value > new Date()) {     /*Si la fecha de creación es mayor que la fecha actual*/
      throw new Error("UserCreatedAt esta en el pasado");
    }
  }
}
