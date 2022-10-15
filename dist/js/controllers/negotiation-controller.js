import { NegotiationsView } from './../views/negotiations-view.js';
import { Negotiations } from '../models/negotiations.js';
import { Negotiation } from './../models/negotiation.js';
import { MessageView } from '../views/message-view.js';
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsViewId');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
        this.negotiationsView.update(this.negotiations);
    }
    addInput() {
        const negotiation = this.newNegotation();
        this.negotiations.addNegotiation(negotiation);
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('Negociação adicionada com sucesso');
        this.cleanForm();
    }
    newNegotation() {
        const expRegular = /-/g;
        const date = new Date(this.inputDate.value.replace(expRegular, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
