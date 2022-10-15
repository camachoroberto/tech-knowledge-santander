export class View {
    constructor(select) {
        this.element = document.querySelector(select);
    }
    template(model) {
        throw Error('Classe filha precisa implementar o método template');
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
