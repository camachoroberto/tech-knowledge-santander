export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    addNegotiation(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
}
