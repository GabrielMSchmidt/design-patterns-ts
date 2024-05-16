import Payoneer from "./payoneer/Payoneer";
import IPayoneerPayment from "./payoneer/interface/IPayoneerPayment";
import PayPal from "./paypal/PayPal";
import IPayPalPayment from "./paypal/interface/IPayPalPayment";

const payment: IPayPalPayment = new PayPal();
payment.paypalPayment();
payment.paypalReceive();

const payment2: IPayoneerPayment = new Payoneer();
payment2.sendPayment();
payment2.receivePayment();