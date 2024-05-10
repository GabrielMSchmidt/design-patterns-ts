import SanduicheBuilder from "../builders/SanduicheBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder: SanduicheBuilder){}

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(new Bread("Pao de Hamburguer"));
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.setSalad(new Salad("Alface e Tomate"));
        this.builder.addSauce(new Sauce("Molho da Casa"));
        this.builder.addSauce(new Sauce("Molho Barbecue"));
    }

    constructXBurguer(){
        this.builder.setSanduicheType(SanduicheType.XBURGUER);
        this.builder.setBread(new Bread("Pao de Hamburguer"));
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.setSalad(new Salad("Sem Salada"));
        this.builder.addSauce(new Sauce("Molho da Casa"));
        this.builder.addSauce(new Sauce("Molho Barbecue"));
        this.builder.addSauce(new Sauce("Maionese Temperada"));
    }

    constructXFrango(){
        this.builder.setSanduicheType(SanduicheType.XFRANGO);
        this.builder.setBread(new Bread("Pao de Grãos"));
        this.builder.setProtein(Protein.FRANGO);
        this.builder.setSalad(new Salad("Alface e Cebola Roxa"));
        this.builder.addSauce(new Sauce("Molho da Casa"));
        this.builder.addSauce(new Sauce("Maionese Temperada"));
    }

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(new Bread("Pao de Hot Dog"));
        this.builder.setProtein(Protein.SALSICHA);
        this.builder.setSalad(new Salad("Tomate e Milho"));
        this.builder.addSauce(new Sauce("Molho da Casa"));
        this.builder.addSauce(new Sauce("Molho Barbecue"));
        this.builder.addSauce(new Sauce("Maionese Temperada"));
        this.builder.addSauce(new Sauce("Ketchup"));
    }
}