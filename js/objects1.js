/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

console.log("hello console");

const bikes = [
  {
    name: "flash",
    weight: "30kg",
  },
  {
    name: "lightning",
    weight: "20kg",
  },
  {
    name: "lightning",
    weight: "45kg",
  },
];

console.log("la bici più leggera ha un peso di", bikes[1].weight);
