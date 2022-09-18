export class Negotiation {
  //Declaração privada, não permite modificação nem visibilidade.
  // private _date: Date;
  // private _amount: number;
  // private _value: number;

  // constructor(private _date: Date, private _amount: number, private _value: number) {}

  //Metodos Getter para deixar accessible os valores das propiedades
  // get date(): Date {
  //   return this._date;
  // }
  // get amount(): number {
  //   return this._amount;
  // }
  // get value(): number {
  //   return this._value;
  // }


  // get volume(): number {
  //   return this._amount * this._value;
  // }
 
  constructor(
    public readonly _date: Date,
    public readonly amount: number,
    public readonly value: number,
  ){}
 

  get volume(): number {
    return this.amount * this.value;
  }

  get date(): Date {
    const data = new Date(this._date.getTime());
    return data;
  }
}
