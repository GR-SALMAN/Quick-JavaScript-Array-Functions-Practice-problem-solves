//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

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

//***EVERY***

// 1. Does every character have blue eyes?
console.log({ Q1: "1. Does every character have blue eyes?" });

console.log(
  characters.every((e) => {
    return e.eye_color == "blue";
  }),
  "\n"
);

// 2. Does every character have mass more than 40?
console.log({ Q2: "2. Does every character have mass more than 40?" });

console.log(
  characters.every((e) => {
    return e.mass > 40;
  }),
  "\n"
);

// 3. Is every character shorter than 200?
console.log({ Q3: "3. Is every character shorter than 200?" });
console.log(
  characters.every((e) => {
    return e.height < 200;
  }),
  "\n"
);

// 4. Is every character male?
console.log({ Q4: "4. Is every character male?" });

console.log(
  characters.every((e) => {
    return e.gender == "male";
  }),
  "\n"
);
