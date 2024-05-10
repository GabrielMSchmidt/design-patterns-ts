import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);

director.constructXSalada();

const x_salada : Sanduiche = builder.getSanduiche();
console.log("Fazendo Sanduiche...");
console.log("Pão: " + x_salada.bread.type);
console.log("Proteína: " + x_salada.protein);
console.log("Salada: " + x_salada.salad.type);
console.log("Molhos: " + x_salada.sauces.length);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

director.constructHotDog();

const hot_dog : Sanduiche = builder.getSanduiche();
console.log("Fazendo Sanduiche...");
console.log("Pão: " + hot_dog.bread.type);
console.log("Proteína: " + hot_dog.protein);
console.log("Salada: " + hot_dog.salad.type);
console.log("Molhos: " + hot_dog.sauces.length);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

director.constructXFrango();

const x_frango : Sanduiche = builder.getSanduiche();
console.log("Fazendo Sanduiche...");
console.log("Pão: " + x_frango.bread.type);
console.log("Proteína: " + x_frango.protein);
console.log("Salada: " + x_frango.salad.type);
console.log("Molhos: " + x_frango.sauces.length);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");