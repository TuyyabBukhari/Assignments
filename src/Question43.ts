/*Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.  */
function show_magicians(magicians:any) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians:any) {
    const greatMagicians = []; 

    for (let i = 0; i < magicians.length; i++) {
        greatMagicians[i] = "the Great " + magicians[i];
    }

    return greatMagicians; 
}

const magicianNames2 = ["David Blaine ", "Harry Houdini", "Dynamo"];


const greatMagicianNames = make_great([...magicianNames2]);


console.log("Original Magicians:");
show_magicians(magicianNames2);

console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
