//***FILTER***
const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];
//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters
console.log({ Q1: "1. Get characters with mass greater than 100" });

console.log(
  characters.filter((e) => {
    return e.mass > 100;
  }),
  "\n"
);

console.log({ Q2: "2. Get characters with height less than 200" });

console.log(
  characters.filter((e) => {
    return e.height > 200;
  }),
  "\n"
);

console.log({ Q3: "3. Get all male characters" });

console.log(
  characters.filter((e) => {
    return e.gender == "male";
  }),
  "\n"
);

console.log({ Q4: "4. Get all female characters" });

console.log(
  characters.filter((e) => {
    return e.gender == "female";
  }),
  "\n"
);
