import IAircraft from "../../Vehicle/aerial/Interfaces/IAircraft";
import ILandVehicle from "../../Vehicle/land/interfaces/ILandVehicle";

export default interface ITransportFactory {
    createTransportVehicle(): ILandVehicle;
    createTransportAircraft(): IAircraft;
}