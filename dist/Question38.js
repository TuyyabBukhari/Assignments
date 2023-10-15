"use strict";
//write a function called describe_city() that accepts the name of a city and its country. 
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan");
describe_city("New York");
describe_city("Paris", "France");
