export class View {
    constructor(select) {
        this.element = document.querySelector(select);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
