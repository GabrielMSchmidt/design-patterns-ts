import IMemento from "./interface/IMemento";

export default class Memento implements IMemento{
    private itens: Array<string> = [];
    private data: string;
    
    constructor(itens: Array<string>){
        this.itens = [];
        this.itens = itens;
        this.data = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    getCompra(): string[] {
        return this.itens;
    }
    getDate(): string {
        return this.data;
    }
    getLista(): void {
        // this.itens.forEach(function(value){
        //     console.log(value + "/");
        // });
        for (var val of this.itens){
            console.log(val);
        }
    }

}