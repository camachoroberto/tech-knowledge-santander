import { Negotiations } from '../models/negotiations.js';
import { Negotiation } from './../models/negotiation.js';
export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations: Negotiations = new Negotiations();

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value')
    }

    addInput(): void {
        const negotiation = this.newNegotation();
        this.negotiations.addNegotiation(negotiation)
        this.cleanForm();
    }

    newNegotation(): Negotiation {
        const expRegular = /-/g;
        const date = new Date(this.inputDate.value.replace(expRegular, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(date, amount, value);
    }

    cleanForm(): void {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}