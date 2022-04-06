// const userName = "Brandon";
// userName = "Ritchie";

// let age = 29;
// age = 28;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => {
//     console.log(event);
//   });
// }

// printOutput(add(5));

const hobbies = ["3D Printing", "Music"];
const moreHobbies = ["Programming", ...hobbies];

moreHobbies.push(...hobbies);

const person = {
  firstName: "Brandon",
  age: 29,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const addedNumber = add(5, 10, 7, 12);
console.log(addedNumber);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;

console.log(userName, age, person);
