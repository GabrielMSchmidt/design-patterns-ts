import Compra from "./compras/Compra";
import ComprasCaretaker from "./compras/ComprasCaretaker";

var compra = new Compra();
var compraCaretaker = new ComprasCaretaker(compra);

compra.addItem("Leite");
compraCaretaker.backup();

compra.addItem("Queijo");
compraCaretaker.backup();

compra.addItem("Banana");
compraCaretaker.backup();

console.log(" ");
compraCaretaker.showHistory();

console.log("Voltando a Lista de Compras passada.");
compraCaretaker.undo();

console.log("Voltando mais uma vez...");
compraCaretaker.undo();
