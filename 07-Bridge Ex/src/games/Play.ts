import IConsole from "../consoles/interfaces/IConsole";
import IGame from "./interfaces/IGame";

export default class Play implements IGame{
    constructor(private consoles: IConsole){}

    playing(): void {
        console.log("Iniciando o Jogo...");
    }
    result(): void {
        console.log("****** NO AR ******");
    }

}