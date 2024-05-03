import Beer from "../Lunchs/Drink/Beer";
import IDrink from "../Lunchs/Drink/Interfaces/IDrink";
import Hamburguer from "../Lunchs/Food/Hamburguer";
import IFood from "../Lunchs/Food/Interfaces/IFood";
import IDeliveryFactory from "./Interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory {
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
}