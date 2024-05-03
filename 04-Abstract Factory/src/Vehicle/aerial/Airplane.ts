import IAircraft from "./Interfaces/IAircraft";

export default class Airplane implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião: Iniciando a Decolagem...");
    }
    getCargo(): void {
        console.log("Avião: Passageiros Embarcados");
    }
    checkWind(): void {
        console.log("Avião: Ventos a 25km");
    }

}