//My age in years
const myAge = 44;

//To indicate the two first years
let earlyYears = 2;
earlyYears *= 10.5; 

//This calculation subtracts the first two years 
let laterYears = myAge - 2;

//To indicate how to calculate the four years following the first two
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//Total age in dog years
myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

const myName = 'Vanessa'.toLowerCase();
console.log(myName);

//To concatenate my name with my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
