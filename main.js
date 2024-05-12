"use strict";
// Question 17:
//Answer:
//Initial list of guest:
let guests = ["Zara", "asra", "Zoe", "Izhan", "Arham"];
//Informing that only two people can be invited.
//console.log("Due to limited spacee, only two people can be invited for dinner.");
//Removing guest until only two people names remain.
//while(guests.length > 2){
//onst removedGuest = guests.pop();// remove the last guest from the list.
//console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner `);
//};
//Printing invitations to the remaining two guest.
//guests.forEach((guest) => {
//  console.log(`Dear ${guest}, you're still invited to dinner,`);
//});
// Removing the last two names from the list .
guests.pop();
guests.pop();
//Printing the final list to confirm its empty:
console.log("Final guest list;", guests);
