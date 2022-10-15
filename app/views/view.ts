export abstract class View<generics> {
    protected element: HTMLElement;
    
    constructor(select: string){
        this.element = document.querySelector(select);
    } 
    
    abstract template(model: generics): string;

    update(model: generics): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}