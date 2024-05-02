import Airplane from "../Vehicle/aerial/Airplane";
import IAircraft from "../Vehicle/aerial/Interfaces/IAircraft";
import Car from "../Vehicle/land/Car";
import ILandVehicle from "../Vehicle/land/interfaces/ILandVehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";

export default class UberTransport implements ITransportFactory {
    
    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
    createTransportAircraft(): IAircraft {
        return new Airplane();
    }
}