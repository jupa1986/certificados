

const axios = require('axios');
const https = require('https');
// Make a request for a user with a given ID
//
const agent = new https.Agent({  
  rejectUnauthorized: false
});

axios.get('https://cuenta.ciudadaniadigital.agetic.gob.bo', { httpsAgent: agent })
  .then(function (response) {
    // handle success
    console.log(response);
    let cert = response.request.res.socket.getPeerCertificate(false);
    console.log('cert  ', cert)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
