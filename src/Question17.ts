/*Shrinking Guest List: You just found out that your new dinner table won’t arrive
 in time for the dinner, and you have space for only two guests.*/

 const GuestList:string[]=["Nawal","Farwa","Tuyyab","Meerab","Aiman","Zainab","Rubab"];
 console.log(`Unfortunately,the new dinner table won't arrive in time for the dinner,and we can only invite two people for dinner.`);
 
 while (GuestList.length > 2){
 
     const removed_Guest=GuestList.pop();
     console.log(`Sorry,${removed_Guest} we can't invite you to dinner this time.`);
 }
 
 GuestList.forEach((guest)=>{
     console.log(`Dear ${guest} you are still invited to dinner.`);
 
 });
 
 GuestList.pop();
 GuestList.pop();
 
 console.log(`Guest list at the end: ${GuestList}`);