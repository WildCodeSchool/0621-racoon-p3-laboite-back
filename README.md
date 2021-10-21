# 0621-racoon-p3-laboite-back

Dans le terminal : “npm install”, pour installer les dépendances et “npm start” pour lancer le serveur

### Base de données en MySQL
fichier config: ./config/db-config.js
La base de données peut être récupérée avec le fichier database_bac.sql du dossier config.

### Variable d'environnement :

PORT = port du serveur
DB_HOST= adresse du server
DB_PORT= port de la base de donnée
DB_USER= nom d’utilisateur de la base de données
DB_PASSWORD= password de la base de données
DB_NAME= nom de la base de donnée

PRIVATE_KEY= clef privée pour le hachage du mot de passe avec argon2

Une boîte mail pour la boîte d'à côté doit être créée, et les deux variables ci-dessous permettent de configurer l'accès de nodemailer pour l’envoi de mail.
ADRESS_EMAIL= adresse Mail pour la configuration de l’envoi le mail via le formulaire contact
ADRESS_PASSWORD= mot de passe de la boite mail

### Pour créer un nouvel accès admin

faire une requête POST via postman ou autre sur : 
“adresse host”/login/addAdmin 
{“email” : “exemple@mail.fr”, “password” : , “exemple”}

### Les différentes routes d’accès à la base de données :

  app.use('/poles', poleRouter)
  app.use('/concept', conceptRouter)
  app.use('/contact', contactRouter)
  app.use('/social', socialRouter)
  app.use('/members', membersRouter)
  app.use('/login', loginRouter)
  app.use('/activities', activitiesRouter)
  app.use('/partnership', partnershipRouter)
  app.use('/partners', partnersRouter)



JsonWebToken => helpers/Jwt.js 
calculateToken => Créé le token avec un période de validité de 8h
verifyToken => Middleware pour vérifier l’authenticité du jwt envoyé par le client
