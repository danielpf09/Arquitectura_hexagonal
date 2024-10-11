export class UserName {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid() {
    if (this.value.length < 3) {
      throw new Error("UserName debe tener al menos 3 caracteres");
    }
  }
}
