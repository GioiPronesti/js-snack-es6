/*Snack2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

risultato = nuovo array di oggetti conteneti solo nomi e falli subiti 
newarray = [ 
    {
        name: squadra
        falli: randomnumber
    },
    {
        name: squadra
        falli: randomnumber

    },
    {

        name: squadra
        falli: randomnumber
    }

]

*/
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const teams = [
  {
    name: "Parma",
    score: 0,
    fouls_taken: 0,
  },
  {
    name: "Sassuolo",
    score: 0,
    fouls_taken: 0,
  },
  {
    name: "Lecce",
    score: 0,
    fouls_taken: 0,
  },
];

// genero numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
/*
1 genero numeri rando sulla variabile random
2 aggiorno il valore chiave score e fouls_taken da 0 a random number

*/

// 1 genero un numero random (1-10) lo assegno alla variabile randomNumber
const minValue = 2;
const maxValue = 100;

let randomNunber = Math.floor(Math.random() * (maxValue - minValue) + minValue);
console.log(randomNunber);
