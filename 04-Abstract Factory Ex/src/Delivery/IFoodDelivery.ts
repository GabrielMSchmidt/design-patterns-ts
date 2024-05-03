import IDrink from "../Lunchs/Drink/Interfaces/IDrink";
import SoftDrink from "../Lunchs/Drink/SoftDrink";
import HotDog from "../Lunchs/Food/HotDog";
import IFood from "../Lunchs/Food/Interfaces/IFood";
import IDeliveryFactory from "./Interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory {
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
}