const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 8000
var axios = require('axios');
var randomUserApiUrl =  'https://randomuser.me/api/';

app.get('/userinfo', (req, res) => {

var config = {
  method: 'get',
  url: randomUserApiUrl,
};
axios(config)
.then(function (response) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
  res.status(400).send(error)
});

})

app.listen(port, () => {
  console.log(`Express js backend running on port ${port}`)
})