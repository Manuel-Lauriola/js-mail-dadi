// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo


//faccio inserire l'email all'utente e lo salvo in una variabile mail
const mail = prompt("inserisci la tua mail")
console.log(mail)

//definisco la lista di chi può accedere in un array validMail
const validMail = ["Margot@mail", "Scarlett@mail", "Megan@mail", "Jessica@mail", "Emma@mail"]

//utilizzo un ciclo for per determinare se l'utente è presente nella lista

for( i = 0; i < validMail.length; i++) {
  if (validMail.indexOf(mail) !== -1) {
      console.log("Benvenuta")
    }
    else {console.log("utente non trovato")
    }
}