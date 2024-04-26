import Location from "./location/Location";
import GameLocation from "./location/GameLocation";
import MovieLocation from "./location/MovieLocation";

declare var process;

let location: Location;

if(process.argv.includes("Valorant")){
    location = new GameLocation();
}else if(process.argv.includes("Waves")){
    location = new MovieLocation();
}else{
    console.log("Selecione o tipo de locação");
}

if(location){
    location.startItem();
}