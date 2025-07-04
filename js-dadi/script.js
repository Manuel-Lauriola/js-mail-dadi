//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

//fisso 2 variabili che facciano da contenitore ai numeri generati per utente e pc

let userPoints = 0;
let pcPoints = 0

//faccio generare 2 numeri casuali da 1 a 6 e li assegno a user e pc

userPoints = Math.floor(Math.random()*6)+1;
pcPoints = Math.floor(Math.random()*6)+1;
console.log(userPoints, pcPoints)

//eseguo il controllo e dichiaro il vincitore

