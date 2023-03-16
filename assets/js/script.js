//chiedere all'utente di inserire una parola e verificare se la parola inserita è palindroma

let parolapalindroma = prompt('inserisci una parola per controllare se è palindroma')

//creiamo la funzione 
function palindroma(parola) {
/*     //creiamo un array delle lettere nella prima parola
    let wordArray = []
    let wordArrayOpposite = []
    for (let i = 0; i < parola.length; i++) {
        //variabile lettera a cui aggiungiamo il valore di ogni lettera della parola
        let lettera = parola[i];
        //aggiungiamo la lettera all'array
        wordArray.push(lettera)
        //stampiamo l'array
        console.log(wordArray);
    }
    console.log(wordArray); */

    //secondo ciclo che inverte la parola
    let parolaReverse = ""
    for (let i = parola.length-1; i >= 0; i--) { //ciclo che inverte il conteggio dell'indice
        //variabile lettera = valore di ogni lettera della parola ma letta al contrario
        let lettera = parola[i];
        //aggiungiamo la lettera all'arrayOpposto
        parolaReverse += lettera
        //parolaReverse.push(lettera)
        //stampiamo l'array
        console.log(parolaReverse);
    }

    //controlliamo che parola e parola reverse siano uguali
    
    if (parola == parolaReverse) {
        console.log('la parola è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }

}

palindroma(parolapalindroma)


//ESERCIZIO 2

//l'utente sceglie se pari o dispari e un numero da 1 a 5
let userEven = prompt('scegli tra pari e dispari')
console.log(userEven);
let userNumber = Number(prompt('scegli un numero da 1 a 5')) 
console.log(userNumber);

//generiamo un numero random (sempre da 1 a 5) per il computer (unsando una funzione)
function computerRandom(min, max) {
    return Math.floor(Math.random() * (1 + max - min)) + min;
}

let pcRand = computerRandom(1, 5)
console.log(pcRand);

//sommiamo i due numeri
const sum = userNumber + pcRand
console.log(sum);

//stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function even(number) {
    if(number % 2 == 0) {
        console.log('il numero è pari');
        return true
    } else {
        console.log('il numero è dispari');
        return false
    }
}

const result = even(sum)
console.log(result);

//dichiariamo chi ha vinto

function evenOrNot(userInput, computerInput) {
    if (userInput == 'pari' && computerInput == true) {
        console.log('hai indovinato');
    } else if (userInput == 'dispari' && computerInput == false) {
        console.log('hai indovinato');
    } else {
        console.log('non hai indovinato');
    }
}

console.log(evenOrNot(userEven, computerInput));
