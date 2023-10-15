"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Write a function called city_country() that takes in the name of a city and its country
function city_country(city, country) {
    return `${city}, ${country}`;
}
const location1 = city_country("Lahore", "Pakistan");
console.log(location1);
const location2 = city_country("New York", "USA");
console.log(location2);
const location3 = city_country("Paris", "France");
console.log(location3);
