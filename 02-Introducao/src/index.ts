import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

var venda : Venda = new Venda();
var cliente : Cliente = new Cliente();
var tel1 : Telefone = new Telefone();
var telefones : Telefone[] = new Telefone();
var prod1 : Produto = new Produto();
var prod2 : Produto = new Produto();
var produtos : Produto[] = new Produto();
var endereco : Endereco = new Endereco();

cliente.data_nascimento = "16.12.2004";
cliente.cpf = 111222333;
cliente.nome = "Gabriel";
cliente.sexto = "Masculino";

endereco.cidade = "Guarapuava";
endereco.estado = "Paraná";
endereco.numero = 439;
endereco.rua = "Rua Cedeteg";

tel1.ddd = "42";
tel1.numero = "99998-0842";
tel1.tipo = "Celular";
telefones[0] = tel1;

prod1.codigo = 1;
prod1.descricao = "Banana";
prod1.valor = 5.50;
prod2.codigo = 2;
prod2.descricao = "Refrigerante";
prod2.valor = 7.25;
produtos[0] = prod1;
produtos[1] = prod2;

cliente.telefones = telefones;
cliente.endereco = endereco;
venda.produtos = produtos;
venda.cliente = cliente;

console.log(venda.calcularTotal(venda.produtos));