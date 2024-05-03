import IDrink from "./Interfaces/IDrink";

export default class SoftDrink implements IDrink {
    startDelivery(): void {
        this.getType();
        console.log("Refrigerente: Drink Sendo Enviado...");
    }
    getType(): void {
        console.log("Refrigerante: Preparando o Drink");
    }
}