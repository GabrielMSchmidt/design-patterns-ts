import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("PlayStation: Console Configurado.");
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando o Console...");
    }
    authToken(): void {
        console.log("PlayStation: Autenticando o Console...");
    }

}