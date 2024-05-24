import IConsole from "./interfaces/IConsole";

export default class XBox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("XBox: Console Configurado.");
    }
    configureGame(): void {
        this.authToken();
        console.log("XBox: Configurando o Console...");
    }
    authToken(): void {
        console.log("XBox: Autenticando o Console...");
    }

}