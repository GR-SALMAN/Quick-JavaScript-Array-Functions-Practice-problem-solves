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

let init = 0;

//***REDUCE***

// 1. Get total mass of all characters
console.log({ Q1: "1. Get total mass of all characters" });

console.log(
  characters.reduce((acc, e) => {
    return e.mass + acc;
  }, init),
  "\n"
);

// 2. Get total height of all characters
console.log({ Q2: "2. Get total height of all characters" });

console.log(
  characters.reduce((acc, e) => {
    return e.height + acc;
  }, init),
  "\n"
);

// 3. Get total number of characters by eye color
console.log({ Q3: "3. Get total number of characters by eye color" });

console.log(
  characters.reduce((acc, e) => {
    if (!acc[e.eye_color]) {
      acc[e.eye_color] = 1; // Initialize count for the eye color
    } else {
      acc[e.eye_color]++; // Increment count for the eye color
    }
    return acc; // Return the accumulator in each iteration
  }, {}),
  "\n"
);

// 4. Get total number of characters in all the character names
console.log({
  Q4: "4. Get total number of characters in all the character names",
});

console.log(
  characters.reduce((acc, e) => {
    if (!acc[e.name]) {
      acc[e.name] = 1;
    } else {
      acc[e.name++];
    }

    return acc;
  }, {})
);
