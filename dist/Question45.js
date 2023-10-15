"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const myCar = createCar("Toyota", "Camry", ["color", "black"]);
console.log(myCar);
