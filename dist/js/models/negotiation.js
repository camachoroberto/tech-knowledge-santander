export class Negotiation {
  //Declaração privada, não permite modificação nem visibilidade.
  #date;
  #amount;
  #value;

  constructor(date, amount, value) {
    this.#date = date;
    this.#amount = amount;
    this.#value = value;
  }

  //Metodos Getter para deixar accessible os valores das propiedades
  get data() {
    return this.#date;
  }
  get amount() {
    return this.#amount;
  }
  get value() {
    return this.#value;
  }
  get volume() {
    return this.#amount * this.#value;
  }
}
