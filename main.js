/*Il computer sceglie un numero da 1 a 21.
Il compito del giocatore è superarlo, senza “sballare”, cioè andare oltre 21.
Il giocatore deve decidere se chiedere un numero random da 1 a 10 o “fermarsi”
Se il giocatore va oltre 21 ha perso.
Quando si ferma,il programma deve mostrare il punteggio del computer e il
 punteggio dell’utente e dire chi ha vinto (o se è patta)*/


//Il computer sceglie casualmente un numero e lo memorizza
var pcNumber = Math.floor((Math.random() * 21) + 1);
console.log(pcNumber);

//l'utente deve scegliere un numero a caso fra 1 e 10 e poi decidere se fermarsi
//o proseguire
var userArray=[];
var control=false;
var somma=0;
var   i=0;
//il programma chiede all'utente di inserire un numero fra 0 o 1, se
//l'utente sceglie 1, il prog genera un num casuale fra 1 e 10;
do{

  scelta=prompt("inserisci un numero per decidere cosa fare");

  if(scelta==1){
  var userNumber=Math.floor((Math.random() * 10) + 1);
  userArray.push(userNumber);
  somma=somma + userArray[i];
  i++;


  alert("la somma dei numeri scelti dall'user è", + somma);
}
  else if (scelta == 0) {
    control=true;
  }
  else{
    alert("scelta sbagliata");
  }

}while((control==false)&&(somma<22));

if((somma<pcNumber)&&(somma<22)){
  document.write("hai perso, somma = ", + somma);
}
else if((somma>pcNumber)){
  document.write("hai vinto, somma = ", + somma);
}
else if(somma==pcNumber){
  document.write("PAREGGio")
}



function getSum(total, num) {
    return total + num;
}
