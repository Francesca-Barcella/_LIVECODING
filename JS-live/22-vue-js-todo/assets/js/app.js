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

            newTask: '',

            error: false,
            tasks: [
                'learn HTML',
                'learn CSS',
                'learn JS',
            ]
        }
    },

    methods: {

        addTask() {
            console.log('ho cliccato su add task');
            //console.log('valore input = ' + this.newTask);

            //devono inserire almeno 5 caratteri
            if (this.newTask.length < 5) {
                this.error = true
            } else {
                //questi due prima erano fuori e li portiamo dentro l'if-else per risolvere il bug dell'input vuoto
                this.tasks.unshift(this.newTask)
                this.newTask = ''
                this.error = false
            }
        },

        done (index){
            //fruits.splice(2,1) - toglie dalla posizione 2 un elemento dell'array
            console.log('ho cliccato sul task con indice N° = ' + index)
            //tolgo dall'elemento l'elemento attivo che si pesca con il parametro index rilevato al click sullìicona con v-on - 1 indica che tolgie 1 elemento 8se metto due toglie anche l'<li></li> successivo
            this.tasks.splice(index, 1)
        }
    },

}).mount('#app');