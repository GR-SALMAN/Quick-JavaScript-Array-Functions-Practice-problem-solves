//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

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

//***SOME***

// 1. Is there at least one male character?
console.log({
  Q1: "1. Is there at least one male character?--------------------------------",
});

console.log(
  characters.some((e) => {
    return e.gender == "male";
  }),
  "\n"
);

// 2. Is there at least one character with blue eyes?
console.log({
  Q2: "2. Is there at least one character with blue eyes?--------------------------------",
});

console.log(
  characters.some((e) => {
    return e.eye_color == "blue";
  }),
  "\n"
);

// 3. Is there at least one character taller than 210?
console.log({
  Q3: "3. Is there at least one character taller than 210?--------------------------------",
});
console.log(
  characters.some((e) => {
    return e.height > 210;
  }),
  "\n"
);

// 4. Is there at least one character that has mass less than 50?
console.log({
  Q4: "4. Is there at least one character that has mass less than 50?--------------------------------",
});

console.log(
  characters.some((e) => {
    return e.mass < 50;
  }),
  "\n"
);
