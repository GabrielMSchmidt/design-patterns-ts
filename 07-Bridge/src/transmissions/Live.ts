import IPlataform from "../plataforms/interface/IPlatform";
import ITransmission from "./interface/ITransmission";

export default class Live implements ITransmission{
    
    constructor(private platform: IPlataform){}
    
    broadcasting(): void {
        console.log("Iniciando a Transmissão...");
    }
    result(): void {
        console.log("****** NO AR ******");
    }

}