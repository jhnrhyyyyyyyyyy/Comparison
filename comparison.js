let firstFavNumb = 5; 
let secondFavNumb = 21; 

console.log("My first Fav number is", firstFavNumb);
console.log("My second Fav number is", secondFavNumb);

console.log("\nGreater than:", firstFavNumb > secondFavNumb);

console.log("Less than:", firstFavNumb < secondFavNumb);

console.log("Greater than or equal to:", firstFavNumb >= secondFavNumb);

console.log("Less than or equal to:", firstFavNumb <= secondFavNumb);

console.log("Strict equality (===):", firstFavNumb === secondFavNumb);

console.log("Loose equality (==):", firstFavNumb == secondFavNumb);

console.log("Strict inequality (!==):", firstFavNumb !== secondFavNumb);

console.log("Loose inequality (!=):", firstFavNumb != secondFavNumb);

let myFavNumber = firstFavNumb === 5 && secondFavNumb === 21;
console.log("AND operator:", myFavNumber);

let myFavNum = firstFavNumb === 5 || secondFavNumb === 21;
console.log("OR operator:", myFavNum);

let NotFirstFavNumb = firstFavNumb !== 5;
console.log("NOT operator:", NotFirstFavNumb);