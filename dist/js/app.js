import { Negotiation } from './models/negotiation.js';

const negotiation = new Negotiation(new Date(), 10, 200);
console.log('1', negotiation.amount);

console.log('1', negotiation.volume);
