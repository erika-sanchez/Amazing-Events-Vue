// url.search.params 
//URLSearchParams(string)

// console.log([window]);
// console.log(window.location);
const { createApp } = Vue

createApp({
    data() {
        return {
            events: [],
            parametro: [],
            params: [],
            nombreId: [],
            finder: null,
        }

    },

    created(){
            fetch ("https://mindhub-xj03.onrender.com/api/amazing")
    .then(respuesta => respuesta.json())
    .then ( data => {
        this.events = data.events
        this.parametro= location.search
        this.params = new URLSearchParams(parametro)
        this.nombreId = params.get('id')
        this.findre = this.events.find( event => event._id == nombreId) 

    })
    .catch(error => {
    console.error("Error fetching data:", error);
    });

}
}

).mount("#app")

    //hace referencia al parametro, para que me devuelva el valor
    // events = // el metodo de find es que usa el primer elemento que cumpla con la condicion
    // console.log(evento);
    



