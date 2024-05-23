import IPlataform from "./interface/IPlatform";

export default class Twitch implements IPlataform{
    constructor(){
        this.configureRMTP();
        console.log("Twitch: Plataforma Configurada.");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("Twitch: Autorizando a Plataforma.");
    }
}