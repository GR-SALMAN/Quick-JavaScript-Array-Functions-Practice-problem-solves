//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

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

console.log({ Q1: "1. Get array of all names" });

console.log(
  characters.map((e) => {
    return e.name;
  }),
  "\n"
);
console.log({ Q2: "2. Get array of all heights" });
console.log(
  characters.map((e) => {
    return e.height;
  }),
  "\n"
);

console.log({
  Q3: "3. Get array of objects with just name and height properties",
});

console.log(
  characters.map((e) => {
    return {
      Name: e.name,
      height: e.height,
    };
  }),
  "\n"
);
console.log({ Q4: "4. Get array of all first names" });

console.log(
  characters.map((e) => {
    let names = e.name;
    let arr1 = names.split(" ");
    return arr1[0];
  }),
  "\n"
);
