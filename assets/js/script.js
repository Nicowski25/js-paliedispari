//chiedere all'utente di inserire una parola e verificare se la parola inserita è palindroma

const parolapalindroma = 'aerea'

//creiamo la funzione 
function palindroma(parola) {
    //creiamo un array delle lettere nella prima parola
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
    console.log(wordArray);


}

let result = palindroma(parolapalindroma)
console.log();