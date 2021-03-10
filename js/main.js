//Un alert espone 5 numeri casuali diversi.
var totNum = [];
var userNum = [];

for (i = 0; i < 5; i++) {
    var numCas = Math.floor((Math.random() * 100) + 1);
    totNum.push(numCas);
}

alert("Ricorda bene. I numeri da ricordare sono " + totNum);
//parte un timer di 30 secondi;
setTimeout(function() {
    /*Dopo 30 secondi l’utente deve inserire, un prompt alla volta, 
    i numeri che ha visto precedentemente.*/
    
    while (userNum.length < 5) {
        var askNum = parseInt(prompt("Inserisci un numero"));

        if (userNum.includes(askNum) == false) {
            userNum.push(askNum);
        }
    }
    /*for (i = 0; i < 5; i++) {
       askNum = parseInt(prompt("Inserisci il primo numero"));
        if (Number.isNaN(askNum)) {
          alert("Non hai inserito un numero");
          i--;
        }
        else {
          userNum.push(askNum);
        }*/
        // il software dice quanti e quali numeri sono stati ricordati.

        var ricordati = [];

        for (i = 0; i < userNum.length; i++) {
           if (totNum.includes(userNum[i]));
           ricordati.push(userNum[i]);
        }

        alert("Ti sei ricordato " + ricordati.length + " numeri. I numeri che ti sei ricordato sono: " + ricordati);

} , 3 * 1000);
