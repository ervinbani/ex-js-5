/*Il computer sceglie un numero da 1 a 21.
Il compito del giocatore è superarlo, senza “sballare”, cioè andare oltre 21.
Il giocatore deve decidere se chiedere un numero random da 1 a 10 o “fermarsi”
Se il giocatore va oltre 21 ha perso.
Quando si ferma,il programma deve mostrare il punteggio del computer e il
 punteggio dell’utente e dire chi ha vinto (o se è patta)*/

 var casualNumber = Math.floor((Math.random() * 21) + 1);
alert(casualNumber);
