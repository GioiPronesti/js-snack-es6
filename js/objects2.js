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

const FootballTeams = [];

for (let i = 0; i < teams.length; i++) {
  const team = teams[i];

  team.points = randomNumbersFromMinToMax(0, 110);
  team.fouls_taken = randomNumbersFromMinToMax(0, 30);

  const newTeam = {
    name: team.name,
    fouls: team.fouls_taken,
  };

  FootballTeams.push(newTeam);

  // console.log(team)
}

console.log(FootballTeams);

// 1 genero un numero random (1-10) lo assegno alla variabile randomNumber

function randomNumbersFromMinToMax(min, max) {
  const minCeiled = Math.ceil(min); //arrotonda al minimo numero intero più alto
  const maxFloored = Math.floor(max); //arrotonda al max numero intero più basso
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  // The maximum is inclusive and the minimum is inclusive
}
