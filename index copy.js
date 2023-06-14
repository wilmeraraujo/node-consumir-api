const axios = require('axios');
let url = 'https://jsonplaceholder.typicode.com/todos';
let data = {
    nombre:"Wilmer wa",
    alias:"Araujo wa",
    edad:18
}
let config = {
    headers:{
        Authorization:"bearer asfasdfasdfasdfasdfas"
    }
}
axios.post(url,data,config).then(response =>{
    //console.log(response)
    let persona = response.data;
    console.log(persona.nombre)
})