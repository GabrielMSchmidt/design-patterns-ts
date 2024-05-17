import Codigo from "../utils/Codigo";
import ITransportadora from "./interface/ITransportadora";

export default class Transportadora implements ITransportadora{
    codigo: Codigo;
    send(): void {
        this.codigo = new Codigo();
        console.log("Código de Rastreio: " + this.codigo.codigo);
        console.log("Enviando Encomenda Via Transportadora...");
    }
    receive(): void {
        console.log("Recebendo Encomenda Via Transportadora...");
    }

}