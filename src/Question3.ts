/*Name Cases: Store a person’s name in a variable, and then print
 that person’s name in lowercase, uppercase, and titlecase.*/

 function toTitleCase(input: string): string {
    return input.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}
function main() {
    //declearing string
let myName:string="tuyyab bukhari";
//convert a string to uppercase 
console.log(myName.toUpperCase());

//convert the string to lowercase
console.log(myName.toLowerCase());

//convert the string to titlecase using titlecae function
console.log(toTitleCase(myName)); 
}

main();