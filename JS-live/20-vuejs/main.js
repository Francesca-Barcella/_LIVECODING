/* 
LIVE 2 
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.

 */



const { createApp } = Vue

createApp({
    data() {
        return {
            name: '',
            lastname: ''
        }
    }
}).mount('#app');

/* const {createApp} = Vue
createApp ({
    data (){
        return{
            title: 'live numero 2 - eventlistener',
            textColor: "colorRed"
        }
    },
    methods: {
        changeColor: function(){
            console.log('clicked');
            this.textColor = "colorBlue"

        }
    }
}).mount('#app_2') */

/* const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'hello',
            text: 'ecco il nostro esercizio',
            color: 'color'
        }
    },
    methods: {
        newText() {
            console.log(this.text);
            this.text = 'testo cambiato'
        }
    }
}).mount('#app_3'); */