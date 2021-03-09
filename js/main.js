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
    for (i = 0; i < 5; i++) {
       askNum = parseInt(prompt("Inserisci il primo numero"));
        if (Number.isNaN(askNum)) {
          alert("Non hai inserito un numero");
          i--;
        }
        else {
          userNum.push(askNum);
        }
    }
} , 3 * 1000);

// il software dice quanti e quali numeri sono stati ricordati.
var quali = [];
for (i = 0; i < userNum.length; i++) {
    if (userNum.includes(totNum[i])) {
        quali.push(userNum);
    }
}


/*for (i = 0; i < totNum.length; i++) {
    var quanti = totNum.includes(userNum.length);
}
console.log(quanti);*/