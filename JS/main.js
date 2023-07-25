/* Vue.creatApp() */

const { createApp } = Vue //toma la propiedad 

//metodo (funcion dentro de un objeto) //creando la app
const options = { 
    //define y almacena los datos que el componente utilizará
    data(){
        return {
            events: [],
            categoriasUnicas: [],
            inputSearch:[],
            categoriasSeleccionadas: [],
            inputValue: "",
            filtrosCruzados: [],

        } /// propiedades reactivas  // pasando las opciones con las que quiero que se cree
    }, ///metodo del objeto 

    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
            .then( Response => Response.json())
            .then( data =>{
                this.events = data.events;
                let categorias = this.events.map(event => event.category);
                this.categoriasUnicas = Array.from(new Set(categorias));
                this.filtrosCruzados = data.events;

            })
            .catch(err => console.error( err))


    },
    computed: {
        filtrosCrossed(){
            this.filtrosCruzados = this.events.filter(event=> {
                return event.name.toLowerCase().includes(this.inputValue.toLowerCase()) && (this.categoriasSeleccionadas.includes(event.category) || this.categoriasSeleccionadas.length == 0)
            }); 
        },
    },

}
const app = createApp( options )

 /// se le pasa como argumento un objeto 

 .mount( '#app' ) ///un ID al app
