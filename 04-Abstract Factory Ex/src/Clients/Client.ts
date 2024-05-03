import IDeliveryFactory from "../Delivery/Interfaces/IDeliveryFactory";
import IDrink from "../Lunchs/Drink/Interfaces/IDrink";
import IFood from "../Lunchs/Food/Interfaces/IFood";

export default class Client {
    private food: IFood;
    private drink: IDrink;

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(): void{
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}