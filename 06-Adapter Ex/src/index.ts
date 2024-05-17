import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interface/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const transportadora: ICorreios = new TransportadoraAdapter(new Transportadora());

transportadora.sendCorreios();
transportadora.receiveCorreios();

const correios: ICorreios = new Correios();

correios.sendCorreios();
correios.receiveCorreios();