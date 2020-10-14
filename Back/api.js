const express = require('express');
const app = express();
const router = require('./Routes/Routes');
const cors = require('cors');
const port = 4000;
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

app.listen(port, () => {
  console.log('Vous êtes connecté au serveur !');
})