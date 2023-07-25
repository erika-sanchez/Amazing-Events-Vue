const { createApp } = Vue //toma la propiedad 

//metodo (funcion dentro de un objeto) //creando la app
const options = { 
    //define y almacena los datos que el componente utilizará
    data(){
        return {
            eventsPast: [],
            currentDate: "",
            categoriasUnicas: [],
            /* filter:[], */
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
                this.eventsPast = data.events.filter(event => event.date < this.currentDate);
                let categorias = this.eventsPast.map(event => event.category);
                this.categoriasUnicas = Array.from(new Set(categorias));
                this.filtrosCruzados = this.eventsPast;

            })
            .catch(err => console.error( err))


    },
    computed: {
        filtrosCrossed(){
            return this.eventsPast.filter((event) => {
                return (
                    event.name.toLowerCase().includes(this.inputValue.toLowerCase()) &&
                    (this.categoriasSeleccionadas.includes(event.category) || this.categoriasSeleccionadas.length === 0)
                );
            });
        },
    },

}
const app = createApp( options )

 /// se le pasa como argumento un objeto 

 .mount( '#app' ) ///un ID al app
