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
    console.log(parolaReverse);

    //controlliamo che parola e parola reverse siano uguali
    
    if (parola == parolaReverse) {
        console.log('la parola è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }

}

palindroma(parolapalindroma)

//