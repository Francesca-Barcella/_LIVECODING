/* 
Stampiamo i numeri da 1 a 100 tramite la direttiva v-for
*/

const {createApp} = Vue;

createApp ({ //funzione
    data(){ //options object
        return{
            max: 100
        }
    }
}).mount('#app') //monto (mount) l'oggetto nell'html tramite l'id selezioneato ('#app)