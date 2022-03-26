const multer = require('multer'); //multer , un package qui nous permet de gérer les fichiers entrants dans les requêtes HTTP. 

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({ //l'objet de configuration qu'on passe à disk storage prends 2 éléments
  destination: (req, file, callback) => { //1 la destination explique à multer dans quel dosser s'enregistrer 
    callback(null, 'images'); //le nom du dossier qu'on a crée en 2eme argument
  },
  filename: (req, file, callback) => { // le nom du fichier 
    const name = file.originalname.split(' ').join('_'); //on crée son nom en récupérant son nom d'origine du fichier
    const extension = MIME_TYPES[file.mimetype];  //on applique une extension au fichier avec le dictionnaire mime type plus haut
    callback(null, name + Date.now() + '.' + extension); //on lui ajoute un timestamp (date.now) pr qu'il soit unique + point +extension
  }
});

module.exports = multer({storage: storage}).single('image');  // on exporte le middleware multer 