/****************************************************** 
Traccia:
Creare un applicazione per l'inserimento e la visualizzazione di una lista di tasks.
Aggiungere un input con un pulsante, una lista di tasks da visualizzare di default.
Al click sul pulsante aggiungiamo la task inserita nell'input dentro la lista di tasks.
La nuova task non deve essere vuota ne minore di 5 caratteri, mostrare un messaggio per avvisare
l'utente che la task non é indonea.

Bonus:
- facciamo inserire la task anche al click del tasto enter

******************************************************/

const { createApp } = Vue

createApp({
    data() {

        return {
            //in newTask verranno inseriti i valori digitati nell'input tramite v-model
            newTask: '',
            //assegno valore false di default perchè inizialmente il messaggio non sid eve vedere
            error: false,
            tasks: [
                'learn HTML',
                'learn CSS',
                'learn JS',
            ]
        }
    },

    methods: {
        //funzione che restituirà un qualcosa al @click="addTask"
        addTask() {
            console.log('ho cliccato su add task');
            //console.log('valore input = ' + this.newTask);

            //array.push(element) - così inserisce alla fine dell'elemento su cui sta pushando
            //this.tasks.push(this.newTask)

            //con unshit lo pushiamo all'inizio dell'elemento del dom
            //[unshift === non spostato]
            //this.tasks.unshift(this.newTask)

            //svuotare input al click del button
            //this.newTask=''

            //devono inserire almeno 5 caratteri
            if (this.newTask.length < 5) {
                this.error = true
            } else {
                //questi due prima erano fuori e li portiamo dentro l'if-else per risolvere il bug dell'input vuoto
                this.tasks.unshift(this.newTask)
                this.newTask = ''
                this.error = false
            }
        }
    }


}).mount('#app');