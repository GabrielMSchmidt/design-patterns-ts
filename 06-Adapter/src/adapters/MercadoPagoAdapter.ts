import MercadoPago from "../mercadoPago/MecadoPago";
import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/interface/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{

    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando Mercado Pago no PayPal...")
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mercadoPago.mercadoPagoPayment();
    }
    paypalReceive(): void {
        this.mercadoPago.mercadoPagoReceive();
    }
}