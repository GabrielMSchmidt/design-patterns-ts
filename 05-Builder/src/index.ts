import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();

const sedan : Vehicle = builder.getVehicle();
console.log("Criando Veículo...");
console.log("Tipo: " + sedan.vehicleType);
console.log("Potência: " + sedan.engine.power);
console.log("Transmissão: " + sedan.transmission);
console.log("Assentos: " + sedan.seats);
console.log("Rodas: " + sedan.wheels.length + " - Aro " + sedan.wheels[0].rim);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

director.constructTruck();

const truck : Vehicle = builder.getVehicle();
console.log("Criando Veículo...");
console.log("Tipo: " + truck.vehicleType);
console.log("Potência: " + truck.engine.power);
console.log("Transmissão: " + truck.transmission);
console.log("Assentos: " + truck.seats);
console.log("Rodas: " + truck.wheels.length + " - Aro " + truck.wheels[0].rim);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

director.constructMoto();

const moto : Vehicle = builder.getVehicle();
console.log("Criando Veículo...");
console.log("Tipo: " + moto.vehicleType);
console.log("Potência: " + moto.engine.power);
console.log("Transmissão: " + moto.transmission);
console.log("Assentos: " + moto.seats);
console.log("Rodas: " + moto.wheels.length + " - Aro " + moto.wheels[0].rim);
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");