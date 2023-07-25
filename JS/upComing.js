const { createApp } = Vue //toma la propiedad 

//metodo (funcion dentro de un objeto) //creando la app
const options = { 
    //define y almacena los datos que el componente utilizará
    data(){
        return {
            eventsUpComing: [],
            currentDate: "",
            categoriasUnicas: [],
            filter:[],
            categoriasSeleccionadas: [],
            inputValue: "",
            filtrosCruzados: [],

        } /// propiedades reactivas  // pasando las opciones con las que quiero que se cree
    }, ///metodo del objeto 

    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
            .then( Response => Response.json())
            .then( data =>{
                this.currentDate= data.currentDate;
                this.eventsUpComing = data.events.filter(event => event.date > this.currentDate);
                let categorias = this.events.map(event => event.category);
                this.categoriasUnicas = Array.from(new Set(categorias));
                this.filtrosCruzados = data.events;

            })
            .catch(err => console.error( err))


    },
    computed: {
        filtrosCrossed(){
            this.filtrosCruzados = this.eventsUpComing.filter(event=> {
                return event.name.toLowerCase().includes(this.inputValue.toLowerCase()) && (this.categoriasSeleccionadas.includes(event.category) || this.categoriasSeleccionadas.length == 0)
            }); 
        },
    },

}
const app = createApp( options )

 /// se le pasa como argumento un objeto 

 .mount( '#app' ) ///un ID al app
