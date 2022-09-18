import { Negotiation } from './negotiation.js';

export class Negotiations {
    private negotiations: Negotiation[] = [];

    addNegotiation(negotiation: Negotiation): void {
        this.negotiations.push(negotiation)
    }

    list(): readonly Negotiation[] {
        return this.negotiations;
    }


}