export class Negotiation {
    //Declaração privada, não permite modificação nem visibilidade.
    // private _date: Date;
    // private _amount: number;
    // private _value: number;
    constructor(_date, _amount, _value) {
        this._date = _date;
        this._amount = _amount;
        this._value = _value;
    }
    //Metodos Getter para deixar accessible os valores das propiedades
    get date() {
        return this._date;
    }
    get amount() {
        return this._amount;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._amount * this._value;
    }
}
