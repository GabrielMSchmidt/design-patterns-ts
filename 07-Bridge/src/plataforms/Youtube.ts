import IPlataform from "./interface/IPlatform";

export default class Youtube implements IPlataform{
    constructor(){
        this.configureRMTP();
        console.log("Youtube: Plataforma Configurada.");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("Youtube: Autorizando a Plataforma.");
    }
}