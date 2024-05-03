import IDrink from "./Interfaces/IDrink";

export default class Beer implements IDrink {
    startDelivery(): void {
        this.getType();
        console.log("Cerveja: Drink Sendo Enviado...");
    }
    getType(): void {
        console.log("Cerveja: Preparando o Drink");
    }
}