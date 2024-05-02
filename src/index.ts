import Client from "./Clients/Client";
import Company from "./Transport/Company";
import InDriveTransport from "./Transport/InDriveTransport";
import ITransportFactory from "./Transport/Interfaces/ITransportFactory";
import NineNineTrasport from "./Transport/NineNineTransport";
import UberTransport from "./Transport/UberTransport";

const currentCompany = Company.NINENINE;
let factory: ITransportFactory;
let flag: number = 2;

switch(currentCompany){
    case Company.UBER:
        factory = new UberTransport();
        break;
    
    case Company.NINENINE:
        factory = new NineNineTrasport();
        break;

    case Company.INDRIVE:
        factory = new InDriveTransport();
        break;
    default:
        console.log("Companhia não definida.");
}

const client = new Client(factory, flag);
client.startRoute();