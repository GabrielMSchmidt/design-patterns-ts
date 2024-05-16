import Token from "../utils/Token";
import IPayPalPayment from "./interface/IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private token: Token;
    authToken(): Token {
        return new Token();    
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando Pagamento Via PayPal...");    
    }
    paypalReceive(): void {
        console.log("Recevendo Pagamento Via PayPal...");    
    }

} 