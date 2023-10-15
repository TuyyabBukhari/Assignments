"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
 and then use a for loop to print out the name of each animal.*/
// Animals with Common Characteristic
const animals = ["Dog", "Cat", "Rabbit"];
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(`- A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a grat pet!");
