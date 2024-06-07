import IMemento from "../memento/interface/IMemento";
import Compra from "./Compra";

export default class ComprasCaretaker {
    private mementos: IMemento[] = [];
    private compra: Compra;

    constructor(compra: Compra){
        this.mementos = [];
        this.compra = compra;
    }

    public backup(): void {
        console.log("Compras Caretaker: Salvando a Lista de Compras Atual...");
        this.mementos.push(this.compra.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();    
        this.compra.restore(memento);
    }

    public showHistory(): void{
        console.log("Caretaker:Apresentando o Histórico de Compras");
        for (const memento of this.mementos){
            memento.getLista();
            console.log(" ");
        }

    }
}