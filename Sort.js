//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

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

console.log({
  Q1: "1. Sort by mass?--------------------------------",
});

console.log(
  characters.sort(function (a, b) {
    return b.mass - a.mass;
  }),
  "\n"
);

console.log({
  Q2: "2. Sort by height?--------------------------------",
});

console.log(
  characters.sort(function (a, b) {
    return b.height - a.height;
  }),
  "\n"
);

console.log({
  Q3: "3. Sort by name?--------------------------------",
});
console.log(
  characters.sort(function (a, b) {
    return b.name - a.name;
  }),
  "\n"
);

console.log({
  Q4: "4. Sort by gender?--------------------------------",
});

console.log(
  characters.sort(function (a, b) {
    return b.gender - a.gender;
  }),
  "\n"
);
