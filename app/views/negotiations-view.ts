import { Negotiations } from "../models/negotiations.js";

export class NegotiationsView {

    private element: HTMLElement;

    constructor(select: string) {
        this.element = document.querySelector(select)
    }
    template(model: Negotiations): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
            ${model.list().map(negotiation => {
            return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                    <td>${negotiation.amount}</td>
                    <td>${negotiation.value}</td>
                </tr>
                `
        }).join('')}
            </tbody>
        </table>
        `
    }

    update(model: Negotiations): void {
        this.element.innerHTML = this.template(model);
    }
}