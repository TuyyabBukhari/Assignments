//write a function called describe_city() that accepts the name of a city and its country. 

function describe_city(city:string, country = "Default Country") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan"); 
describe_city("New York");
describe_city("Paris", "France"); 