// ! Esercizio 1 :

//^ Dichiaro la fuzione dicegame e gli assegno uan variabile "numberOfShots"

// ?Dichiaro una funzione, ed al suo interno l'esistenza di due giocatori (min)
function DicceRoll(numberOfShots) {
    let p1 = 0;
    let p2 = 0;
    let numberOfShots = 6;

    //^ Incomincia il game, incominciano a tirare

    for (let i = 0; i < numberOfShots; i++) {
        p1 += Math.floor(Math.random() * (6 - 1) + 1);
        p2 += Math.floor(Math.random() * (6 - 1) + 1);
    }

    //^ Decretiamo il vincitore e lo stampiamo

    if (p1 > p2) {
        console.log("Il Player 1 ha vinto!");

    } else if (p2 > p1) {
        console.log("Il Player 1 ha vinto!");

    }
}

// ! Esercizio 2 : 

//^ Creo una fuzione che conta numeri fino ad (N)

function stampaNumeri(N) {

// ^ Creo il ciclo di iterazione
    for (let i = 1; i <= N; i++) {
        let output = '';  // Inizializziamo la stringa vuota
    
        if (i % 3 === 0) output += 'Fizz';  // Aggiunge 'Fizz' se divisibile per 3
        if (i % 5 === 0) output += 'Buzz';  // Aggiunge 'Buzz' se divisibile per 5
    
//^ Se 'i' (15) è divisibile sia per 3 che per 5, 'output' sarà 'FizzBuzz' automaticamente perchè combina le due stringe create
        //?Stampo un output che corrisponde a queste condizioni, "or" qualsiasi n che non le rispetta 
        console.log(output || i);
    }

}


stampaNumeri(10);  // Questo esempio stampa i numeri da 1 a 10

//! Esercizio 3 :







