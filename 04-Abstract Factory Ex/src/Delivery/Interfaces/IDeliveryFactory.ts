import IDrink from "../../Lunchs/Drink/Interfaces/IDrink";
import IFood from "../../Lunchs/Food/Interfaces/IFood";

export default interface IDeliveryFactory {
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}