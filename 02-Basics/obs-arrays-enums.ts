// const person: { name: string; age: number } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple is a fixed length array
// } = {
//   name: "Brandon",
//   age: 29,
//   hobbies: ["Coding", "Music"],
//   role: [2, "manager"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Brandon",
  age: 29,
  hobbies: ["Coding", "Music"],
  role: Role.ADMIN,
};

// person.role.push("admin"); Typescript Tuple does not support push
// person.role[1] = 10;

// person.role = [10, "author", 10]; Typescript Tuple does support errors on assignment

let favoriteActivities: string[];
favoriteActivities = ["Coding"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
