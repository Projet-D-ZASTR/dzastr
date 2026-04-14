# D-ZASTR

<p align="center">
  <img src="/public/assets/Images/D-Zastre.png" alt="Dzastr Logo" width="200">
</p>

# D-ZASTR - LAST CHANGELOG

>**1.0.1-13/04/2026**

## Description

D-Zastr is the new web application for create manage and share your clients.
D-Zastr have a API for manage users and client information.

This is a project free of right. You can use it has you wish if you integre my names. Thanks for your reading.

### Authors:

- Thibaut FIGUEIRA, Devops.
- Camille DAVERIO, Dev Backend.
- Pierre SCHEYER, Dev Frontend.
- Fabien ARTHUR, Dev Backend.

### Stack:

- Front, vuejs.
- Back Authentification, nodejs, js, express.
- Back API, python.
- Deploiement, renderer.

#### Organisation:

**Github project**
>github	https://github.com/orgs/Projet-D-ZASTR/repositories

**Main repo**
>dzastr	https://github.com/Projet-D-ZASTR/dzastr


**SubModules**

>**dzastr-fo** https://github.com/Projet-D-ZASTR/dzastr-fo

>**dzastr-mo** https://github.com/Projet-D-ZASTR/dzastr-mo

>**dzastr-auth** https://github.com/Projet-D-ZASTR/dzastr-auth

>**Git Kamban** https://github.com/orgs/Projet-D-ZASTR/projects/3/views/1

#### Liens production:

**Render FO**
>https://dzastr-fo.onrender.com/auth

Voici le résumé de la stratégie de déploiement du projet:

- Crée une branche tiré de develop.
- Après validation de la branche, crée une MR vers develop.
- Après validation de la MR, merge la branche dans develop.
- Après validation du merge, crée une MR de develop vers production.
- Un github action se déclenche pour valider la MR de develop vers production.
- Si la MR est validé, et le merge est fait, le pipeline de CI/CD se déclenche et déploie automatiquement l'application sur Render.

### Documentation:

Pour accèder à la documentation de l'API, il y a deux options:

#### Option 1: Swagger UI

**En Production**, la documentation Swagger UI est accessible à l'URL suivante:

>**MO** https://dzastr-mo.onrender.com/docs#/

>**AUTH** https://dzastr-auth.onrender.com/api/docs/#/

#### Option 2: Postman

Un fichier Postman est disponible dans le dépôt GitHub du projet, à importer dans votre application Postman pour accéder à la documentation de l'API.

>**MO** dzastr/documentation/postman/dzastr-mo.postman_collection.json

>**AUTH** dzastr/documentation/postman/dzastr-auth.postman_collection.json

