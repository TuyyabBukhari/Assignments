"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Favorite Pizzas with Different Names
const favoritePizzas = ["Mushroom", "BBQ Chicken", "Pepperoni"];
console.log("My favorite pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    const pizza = favoritePizzas[i];
    console.log(`- I like ${pizza} pizza.`);
}
console.log("I really love pizza!");
