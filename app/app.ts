import { NegotiationController } from './controllers/negotiation-controller.js';
// import { Negotiation } from './models/negotiation.js';

// const negotiation = new Negotiation(new Date(), 10, 200);

const controller = new NegotiationController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.addInput();
})
