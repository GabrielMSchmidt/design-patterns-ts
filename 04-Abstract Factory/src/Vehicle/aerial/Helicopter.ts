import IAircraft from "./Interfaces/IAircraft";

export default class Helicopter implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: Iniciando a Decolagem...");
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros Embarcados");
    }
    checkWind(): void {
        console.log("Helicóptero: Ventos a 25km");
    }

}