import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MecadoPago";
import Payoneer from "./payoneer/Payoneer";
import IPayoneerPayment from "./payoneer/interface/IPayoneerPayment";
import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/interface/IPayPalPayment";

// const payment: IPayPalPayment = new PayPal();
// const payment: IPayPalPayment = new PayoneerAdapter(new Payoneer());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());
payment.paypalPayment();
payment.paypalReceive();