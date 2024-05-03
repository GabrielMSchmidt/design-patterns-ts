import Helicopter from "../Vehicle/aerial/Helicopter";
import IAircraft from "../Vehicle/aerial/Interfaces/IAircraft";
import Motorcycle from "../Vehicle/land/Motorcycle";
import ILandVehicle from "../Vehicle/land/interfaces/ILandVehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";

export default class NineNineTrasport implements ITransportFactory {
    
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }


}