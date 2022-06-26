export class Negotiation {
  //Declaração privada, não permite modificação nem visibilidade.
  private _data;
  private _amount;
  private _value;

  constructor(data, amount, value) {
    this._data = data;
    this._amount = amount;
    this._value = value;
  }

  //Metodos Getter para deixar accessible os valores das propiedades
  get data() {
    return this.data;
  }
  get amount() {
    return this.amount;
  }
  get value() {
    return this.value;
  }
  get volume() {
    return this.amount * this.value;
  }
}
