import ITransportFactory from "../Transport/Interfaces/ITransportFactory";
import IAircraft from "../Vehicle/aerial/Interfaces/IAircraft";
import ILandVehicle from "../Vehicle/land/interfaces/ILandVehicle";

export default class Client {
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;
    private flag: number;

    constructor(factory: ITransportFactory, flag: number){
        if (flag == 1){
            this.vehicle = factory.createTransportVehicle();
        }
        else {
            this.aircraft = factory.createTransportAircraft();
        }
        this.flag = flag;
    }

    startRoute(): void{
        if (this.flag == 1) {
            this.vehicle.startRoute();
        }
        else {
            this.aircraft.startRoute();
        }
    }
}