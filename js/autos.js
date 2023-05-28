/*Consumo de API con VUE*/
const { createApp } = Vue
  createApp({
    data() {
      return {
       
        autos:[],/*API Generada y Subida para el TPO*/
        url:"https://api.npoint.io/a9a3c8f5aa65f3d34c6a",   
     }
    },
    methods: {
        fetchData(url) {  
         fetch(url) 
           .then(response => response.json()) 
           .then(data => {
             console.log(data)
             this.autos=data.autos
           })
           .catch(error=>alert("Ups... se produjo un error: "+ error))
       },
     },
    created() {
     this.fetchData(this.url)                                                         
    }
  }).mount('#app')

  