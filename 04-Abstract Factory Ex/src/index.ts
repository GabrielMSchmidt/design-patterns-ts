import Client from "./Clients/Client";
import Company from "./Delivery/Company";
import AiqfomeDelivery from "./Delivery/AiqfomeDelivery";
import IFoodDelivery from "./Delivery/IFoodDelivery";
import IDeliveryFactory from "./Delivery/Interfaces/IDeliveryFactory";

const currentCompany = Company.AIQFOME;
let factory: IDeliveryFactory;

switch (currentCompany){
    case Company.IFOOD:
        factory = new IFoodDelivery();
        break;
    case Company.AIQFOME:
        factory = new AiqfomeDelivery();
        break;
    default:
        console.log("Companhia não selecionada.");
}

const cliente = new Client(factory);
cliente.startDelivery();

