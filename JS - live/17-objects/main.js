/* const person = {
name: 'Francesca',
lastName: 'Barcella',
age: 43,
}

console.log(person);

console.log('');


console.log(person.age); 
console.log(person.name); 
console.log(person.lastName);

console.log('');

console.log(person['name']);
console.log(person['lastName']);
console.log(person['age']);

console.log('');


person.color = 'viola';
person['altezza'] = 88;
console.log(person) */



/* LIVE 1 **********************************************************/
const palla = {
    tipo: 'basket',
    colore: 'arancione',
    peso: '1 kg',
}

console.log(palla);

console.log(palla.tipo);

console.log(palla['peso']);

palla.prezzo = 10;
console.log(palla);

palla['prezzo'] = 20;
console.log(palla);


for (const key in palla) {
    //key va ad analizzare tutte le proprietà di palla
    console.log(key);
    //key va ad analizzare tutti i valori di palla
    console.log(palla[key]);
}

console.log('');

/* LIVE 2 **********************************************************/
// definiamo un array di oggetti:
// - ogni elemento dell'array è un oggetto che rappresenta una classe
// - ogni classe ha le proprietà nome e numeroStudenti
// - creiamo un oggetto che rappresenta una nuova classe
// - aggiungiamo la nuova classe all'array iniziale


const classes = [
    {
        nome: 'classe_1',
        numeroStudenti: 30,
    },

    {
        nome: 'classe_2',
        numeroStudenti: 25,
    },

    {
        nome: 'classe_3',
        numeroStudenti: 34,
    },
]

//console.log(classes);

const nuovaClasse = {
    nome: 'classe_4',
    numeroStudenti: 34,
}

//console.log(nuovaClasse);
classes.push(nuovaClasse);
console.log(classes);

for (let i = 0; i < classes.length; i++) {
    let thisClass = classes[i];
    console.log(thisClass);
    let className = thisClass.nome;
    let classStudentNumber = thisClass.numeroStudenti;
    console.log(className);
    console.log(classStudentNumber);
}

console.log('');
/* LIVE 3 **********************************************************/
// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
// 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.

const student = {
    nome: 'mario',
    cognome: 'rossi',
    eta: '33',
}

for (const key in student) {
   console.log(key, student[key]);
}

const students = [
    {
        nome: 'mario',
        cognome: 'rossi',
        eta: '33',
    },

    {
        nome: 'silvia',
        cognome: 'bianchi',
        eta: '20',
    },

    {
        nome: 'andrea',
        cognome: 'corto',
        eta: '47',
    }

]

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student);
    console.log(student.nome);
    console.log(student.cognome);
    console.log(student['nome']);
    console.log(student['cognome']);
}

const userName = prompt ('inserisci il tuo nome');
const userLastName = prompt ('inserisci il tuo cognome');
const userAge = Number(prompt ('inserisci il tua eta'));

// nuova sintassi che funziona ma per ora non fa al caso nostro
/* const newStudent = {
    userName,
    userLastName,
    userAge
}

console.log(newStudent); */

const newStudent = {
    nome: userName,
    cognome: userLastName,
    eta: userAge
}

console.log(newStudent);

students.push(newStudent);
console.log(students);