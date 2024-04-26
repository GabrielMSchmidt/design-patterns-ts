import Location from "./Location";
import Game from "./itens/Game";
import IItem from "./itens/interfaces/IItem";

export default class GameLocation extends Location {
    protected createItem(): IItem {
        return new Game();
    }
}