export class View<generics> {
    protected element: HTMLElement;
    
    constructor(select: string){
        this.element = document.querySelector(select);
    } 
    
    template(model: generics): string {
        throw Error('Classe filha precisa implementar o método template')
    }

    update(model: generics): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}