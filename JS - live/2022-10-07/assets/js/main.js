/* 
LiveCoding#1: 
Ciao Visitatore!
Imposta il nome di colore rosso in vari modi:
Solo con HTML+CSS
Scrivendo su element.style
Aggiungendo la classe con JS
*/

//Scrivendo su element.style
//1° seleziono l'elemento della dom che mi serve
//2° - usare .style per settare il colore dell'elemento selezionato

const titleElement = document.querySelector('h1');

/* titleElement.style.color = 'yellow'; */

//3° - abbino il colore tramite classe di js ma devo commentare quella al punto altrimenti non me la legge


/* titleElement.className = 'green'; */

titleElement.classList.add('blue')

