import IItem from "./interfaces/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("iniciando jogo...");
    }

    getDescription(): void {
        console.log("Descrição do jogo...");
    }
}