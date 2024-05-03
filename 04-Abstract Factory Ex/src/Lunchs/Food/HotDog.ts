import IFood from "./Interfaces/IFood";

export default class HotDog implements IFood {
    startDelivery(): void {
        this.getType();
        console.log("HotDog: Pedido Sendo Enviado...");
    }
    getType(): void {
        console.log("HotDog: Preparando o Pedido");
    }
}