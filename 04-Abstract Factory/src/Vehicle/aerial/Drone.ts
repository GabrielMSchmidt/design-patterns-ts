import IAircraft from "./Interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando a Decolagem...");
    }
    getCargo(): void {
        console.log("Drone: Encomenda Recebida");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 25km");
    }

}