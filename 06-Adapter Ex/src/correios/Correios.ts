import Codigo from "../utils/Codigo";
import ICorreios from "./interface/ICorreios";

export default class Correios implements ICorreios{
    private codigo: Codigo;
    
    sendCorreios(): void {
        this.codigo = new Codigo();
        console.log("Código de Rastreio: " + this.codigo.codigo);
        console.log("Enviando Encomenda Via Correios...");
    }
    receiveCorreios(): void {
        console.log("Recebendo Encomenda Via Correios...")
    }

}