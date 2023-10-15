/*Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.*/
function showmagicians(magicians:any) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function makegreat(magicians:any) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
const magicianNames = ["David Blaine ", "Harry Houdini", "Dynamo"];
makegreat(magicianNames);
showmagicians(magicianNames);
