require('dotenv').config();
const axios = require('axios');

const authToken = process.env.TOKEN;//ingresar token
const nit = process.env.NIT;
const fecha = '2023-05-01';
//const apiUrl = 'https://wsmipres.sispro.gov.co/wsmipresnopbs/api/Prescripcion/NIT/AAAA-MM-DD/TOKEN';
const apiUrl = `https://wsmipres.sispro.gov.co/wsmipresnopbs/api/Prescripcion/${nit}/${fecha}/${authToken}`;

let config = {
    headers: {
        'Authorization': `Bearer ${authToken}`
    }
}

axios.get(apiUrl)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
