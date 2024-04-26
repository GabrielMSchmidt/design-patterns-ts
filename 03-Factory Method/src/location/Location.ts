import IItem from "./itens/interfaces/IItem";

export default abstract class Location{
    startItem(): void {
        let item: IItem = this.createItem();
        item.start();
    }

    protected abstract createItem(): IItem;
}