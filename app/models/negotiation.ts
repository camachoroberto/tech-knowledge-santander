export class Negotiation {
  //Declaração privada, não permite modificação nem visibilidade.
  private _date: Date;
  private _amount: number;
  private _value: number;

  constructor(date: Date, amount: number, value: number) {
    this._date = date;
    this._amount = amount;
    this._value = value;
  }

  //Metodos Getter para deixar accessible os valores das propiedades
  get date(): Date {
    return this._date;
  }
  get amount(): number {
    return this._amount;
  }
  get value(): number {
    return this._value;
  }
  get volume(): number {
    return this._amount * this._value;
  }
}
