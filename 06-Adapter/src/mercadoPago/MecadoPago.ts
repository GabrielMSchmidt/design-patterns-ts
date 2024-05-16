import Token from "../utils/Token";
import IMercadoPagoPayment from "./interface/IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    mercadoPagoPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando Pagamento Via Mercado Pago...");        
    }
    mercadoPagoReceive(): void {
        console.log("Recebendo Pagamento Via Mercado Pago...");
    }

}