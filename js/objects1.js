/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.


*/

console.log("hello console");

const bikes = [
  {
    name: "flash",
    weight: 15,
  },
  {
    name: "lightning",
    weight: 9,
  },
  {
    name: "heavy",
    weight: 25,
  },
];

/**
    {
        name: "lightning",
        weight: 9
    }
*/

// 1 peso di riferimento es bikeligther

// 2 ciclo per scorrere tutti gli elementi dell' array
// 3 condizione che verifichi se IL peso è da aggiornare
//   confronto riferimneto variabile con l'iesimo peso
// 4 aggiorno il valore di bikelighter
// 5 stampa bici leggera

console.log(bikes);

let bikeLight = bikes[0]; //1

for (i = 0; i < bikes.length; i++) {
  //2

  const currentElement = bikes[i]; // l'elemento corrente - l'iesimo elemento

  //console.log(currentElement);

  if (currentElement.weight < bikeLight.weight) {
    // 3 - condizione per confrontare i valori

    bikeLight = currentElement;
    // 4 ho trovato quello giusto me lo salvo e aggiorno il valore di partenza con quello corrente, quello corretto.

    //console.log("la bici più leggera ", currentElement);
  }
}

// 5 stampo l'oggetto finale, la bici con peso più leggero!
console.log(bikeLight);

//console.log("la bici più leggera ha un peso di", bikes[1].weight);
