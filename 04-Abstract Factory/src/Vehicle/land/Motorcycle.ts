import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando Transporte...");
    }
    getCargo(): void {
        console.log("Moto: Passageiros Embarcados");
    }

}