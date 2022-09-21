export class NegotiationsView {
    constructor(select) {
        this.element = document.querySelector(select);
    }
    template(model) {
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
                    <td>?</td>
                    <td>${negotiation.amount}</td>
                    <td>${negotiation.value}</td>
                </tr>
                `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
