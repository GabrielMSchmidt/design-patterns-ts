import ICorreios from "../correios/interface/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{
    constructor(private transportadora: Transportadora){
        console.log("Adaptando Transportadora no Correios...");
    }

    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }

}