import Location from "./Location";
import Movie from "./itens/Movies";
import IItem from "./itens/interfaces/IItem";

export default class MovieLocation extends Location {
    protected createItem(): IItem {
        return new Movie();
    }
}