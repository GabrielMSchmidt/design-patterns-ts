import IFood from "./Interfaces/IFood";

export default class Hamburguer implements IFood {
    startDelivery(): void {
        this.getType();
        console.log("Hamburguer: Pedido Sendo Enviado...");
    }
    getType(): void {
        console.log("Hamburguer: Preparando o Pedido");
    }
}