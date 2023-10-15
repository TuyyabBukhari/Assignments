"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
Object.defineProperty(exports, "__esModule", { value: true });
const fav_travel_destination = [
    "Seoul",
    "London",
    "Paris",
    "New York",
    "Tokyo"
];
//• Print your array in its original order.
console.log("Original Order:");
console.log(fav_travel_destination);
//• Print your array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order (without modifying the original list:)");
console.log([...fav_travel_destination].sort());
//• Show that your array is still in its original order by printing it
console.log("\nOriginal order again:");
console.log(fav_travel_destination);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse alphabetical order (without changing the order of the original list):");
console.log([...fav_travel_destination].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("\nOriginal order again:");
console.log(fav_travel_destination);
//Reverse the order of your list. Print the array to show that its order has changed.
fav_travel_destination.reverse();
console.log("\nReverse order:");
console.log(fav_travel_destination);
fav_travel_destination.reverse();
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nOriginal order restored:");
console.log(fav_travel_destination);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nAlphabetical order (order has been changed):");
fav_travel_destination.sort();
console.log(fav_travel_destination);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nReverse alphabetical order:");
fav_travel_destination.sort();
console.log(fav_travel_destination);
