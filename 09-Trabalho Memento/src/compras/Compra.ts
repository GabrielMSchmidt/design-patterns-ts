import Memento from "../memento/Memento";
import IMemento from "../memento/interface/IMemento";

export default class Compra{
    private itens: Array<string> = [];

    constructor() {
    }

    public addItem(item: string): void {
        console.log("Adicionando " + item + " ao Carrinho...");
        this.itens.push(item);
    }

    public save(): IMemento{
        return new Memento(this.itens);
    }

    public restore(memento: IMemento): void{
        this.itens = memento.getCompra();
        console.log("Restaurando Lista de Compras para: ");
        memento.getLista();
    }
}