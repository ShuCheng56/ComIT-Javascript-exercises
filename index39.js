var firstName= "Shu";
var lastName= "Cheng";
var nameCharacters = firstName.length;
var lastNameCharacters=lastName.length;

console.log("My first name is "+firstName+ " and it is "+nameCharacters+ " characters long");
console.log("My last name is "+lastName+ " and it is "+lastNameCharacters+ " characters long");
console.log("The character difference between my first name and last name is "+ (lastName.length-firstName.length));
console.log("My first name is longer than my last name?" + firstName.length>lastName.length);