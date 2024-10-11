export class UserId {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();   /*método ensureIsValid para validar si el valor cumple con ciertas condiciones.*/
  }

  private ensureIsValid() {
    if (this.value.length < 5) {
      throw new Error("UserId debe tener al menos 5 caracteres");
    }
  }
}
