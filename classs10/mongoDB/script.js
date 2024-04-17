const express = require("express");
const productsRouter = require('./routes/productsRoutes.js');
const app = express();

app.use('./api/products',productsRouter)
const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.ze4atpg.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseUser = 'Prashant';
const databasePassword ='abcd1234';
const databasename = 'Amazon-Backend';

let dbLink = url.replace("$_USERNAME_$",databaseUser);
 dbLink = dbLink.replace("$_PASSWORD_$",databasePassword);
  dbLink = dbLink.replace("$_DB_NAME_$",databasename);




mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('------ Database Connected!-------'));

  app.listen(1600,
()=>console.log('----APP STARTED--------'))