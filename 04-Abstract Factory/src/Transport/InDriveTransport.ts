import Drone from "../Vehicle/aerial/Drone";
import IAircraft from "../Vehicle/aerial/Interfaces/IAircraft";
import Scooter from "../Vehicle/land/Scooter";
import ILandVehicle from "../Vehicle/land/interfaces/ILandVehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";

export default class NineNineTrasport implements ITransportFactory {
    
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }


}