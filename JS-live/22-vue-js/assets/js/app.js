/* Creare un applicazione per l'inserimento e la visualizzazione di una lista di tasks.
Aggiungere un input con un pulsante, una lista di tasks da visualizzare di default.
Al click sul pulsante aggiungiamo la task inserita nell'input dentro la lista di tasks.
La nuova task non deve essere vuota ne minore di 5 caratteri, mostrare un messaggio per avvisare
l'utente che la task non é indonea.
Bonus:
- facciamo inserire la task anche al click del tasto enter */

const { createApp } = Vue

createApp({
    data() {

        return {
            newTask: '',
            tasks: [
                'learn HTML',
                'learn CSS',
                'learn JS',
            ]
        }
    },

    methods: {
        addTasks (){
            console.log('ho cliccato su add task');
            this.tasks.unshift(this.newTask)
        }
    }


}).mount('#app');