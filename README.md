# Projet6

# Contexte du projet
Piiquante se dédie à la création de sauces épicées dont les recettes sont gardées secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.
![Capture d’écran 2022-04-10 à 15 40 04](https://user-images.githubusercontent.com/94977490/171210646-2f99798d-0efd-4ffc-9f4e-cbb46edb572d.png)

# API Routes
Toutes les routes sauce pour les sauces disposent d’une autorisation (le token est envoyé par le front-end avec l'en-tête d’autorisation : « Bearer <token> »). Avant que l'utilisateur puisse apporter des modifications à la route sauce, le code vérifie si l'userId actuel correspond à l'userId de la sauce. Si l'userId ne correspond pas, cela renvoit « 403: unauthorized request. » 
Cela permet de s'assurer que seul le propriétaire de la sauce peut apporter des modifications à celle-ci.
● Implémentation d'un système de Like/Dislike
  
# Exigences de sécurité
● Le mot de passe est haché.
● L'authentification est renforcée sur toutes les routes sauce requises.
● Les adresses électroniques dans la base de données sont uniques et un
plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler
les erreurs.
● La sécurité de la base de données MongoDB (à partir d'un service tel que
MongoDB Atlas) n'empêche pas l'application de se lancer sur la
machine d'un utilisateur.
● Un plugin Mongoose s'assure de la remontée des erreurs issues de la base
de données.
● Les versions les plus récentes des logiciels sont utilisées avec des correctifs
de sécurité actualisés.

Pour plus d'informations sur les éxigences : https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf
