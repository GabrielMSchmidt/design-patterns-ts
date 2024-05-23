import IPlataform from "../plataforms/interface/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform: IPlataform){
        super(platform);
    }

    subtitles(): void{
        console.log("Legendas Ativadas na Transmissão.");
    }
    comments(): void{
        console.log("Comentários Liberados na Transmissão");
    }
}