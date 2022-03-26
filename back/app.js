const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Sauce = require('./models/sauces');
require('dotenv').config() //pour notre variable d'environnement


const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');

const password = process.env.DB_PASSWORD
const userMongo = process.env.DB_USER
const dataname = process.env.DATANAME

mongoose.connect(`mongodb+srv://${userMongo}:${password}@cluster0.5wesn.mongodb.net/${dataname}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images'))); 
//pour dire à notre app express de servir le dossier image quand on fait une requête à /images on crée ce ùoddmware
//pour toutes requetes envoyées à images on sert ce dossier static ce dossier image 


app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;