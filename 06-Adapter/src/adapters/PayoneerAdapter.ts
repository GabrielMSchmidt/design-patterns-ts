import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/interface/IPayPalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPayPalPayment{

    constructor(private payoneer: Payoneer){
        console.log("Adaptando Payoneer no PayPal...")
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        this.payoneer.receivePayment();
    }

}