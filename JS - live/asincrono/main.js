/* 
LIVE 1 - butta la pasta: 
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert
*/

//alert('ciao, funziono!')

/* // chiedere all'utente quanti minuti mancano - prompt
let tempo = Number(prompt = 'quanti secondi mancano alla cottura della pasta?')
// moltiplicare i secondi * 1000 per ottenere i millisecondi
let millisecondi = tempo * 1000;
// dare alert dopo millisecondi - settimeout
setTimeout(tempoPasta, millisecondi);

function tempoPasta () {

alert ('il tempo è terminato');

} */


/*  
LIVE 2
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
*/

// countdown di 10 secondi - setInterval
// alert 'buon anno'
/* 
let seconds = 10;

const intervalId = setInterval(function () {
    document.querySelector('.interval').innerText = seconds;

    if (seconds == 0){
        console.log(seconds);
        clearInterval (intervalId);
        alert ('buon anno');
    } else {
        seconds--;
    }
    
}, 1000); */

//VARIANTE DI 2




/*  
Live 3 
Cliccando su un pulsante, viene avviato un cronometro.
Per fermare il cronometro, bisogna cliccare su un secondo pulsante.
*/

//creare due pulsanti nel dom e li seleziono
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
console.log(startBtn, stopBtn);

//seleziono il cronometro
const timer = document.querySelector('.cronometro');

let id;

//eventlistner per ogni bottone
startBtn.addEventListener('click', function () {
    console.log('hai cliccato startBtn');
    //inizizaliziamo una variabile
    let seconds = 0;

    // setinterval per lo scorrere del tempo
    id = setInterval(function () {
        timer.innerText = seconds;
        seconds++;
    }, 1000);
})

stopBtn.addEventListener('click', function () {
    console.log('hai cliccato stopBtn');
    clearInterval(id);
})