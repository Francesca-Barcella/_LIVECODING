const { createApp } = Vue;

createApp({
    data() {

        return {
            userNumber: null,
            pcNumber: null
        }
    },

    mounted() {
        axios
            //restituisce promessa che prima o poi qualcosa ci ritorna
            .get('https://flynn.boolean.careers/exercises/api/random/int')
            //gestiamo la promessa con il then che si aspetta una funziona di callback
            .then(response => {
                console.log(response.data.response);
                this.userNumber = response.data.response

            }),
            axios
                //restituisce promessa che prima o poi qualcosa ci ritorna
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                //gestiamo la promessa con il then che si aspetta una funziona di callback
                .then(response => {
                    console.log(response.data.response);
                    this.pcNumber = response.data.response

                })

        for (let i = 0; i < 2; i++) {
            axios
                //restituisce promessa che prima o poi qualcosa ci ritorna
                .get('https://flynn.boolean.careers/exercises/api/random/int')
                //gestiamo la promessa con il then che si aspetta una funziona di callback
                .then(response => {
                    console.log(response.data.response);
                    this.numbers.push(response.data.response)
                })
            console.log(this.numbers)
        }
    }


}).mount('#app');