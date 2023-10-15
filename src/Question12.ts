/*Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same,
 but each message should be personalized with the person’s name. */

 let Names:string[]=["Tuyyab","Zainab","Meerab","Farwa","Rida"];
 for (let i = 0; i < Names.length; i++) {
     const message = `Hello, ${Names[i]}! Have a great day!`;
     console.log(message);
 }
 