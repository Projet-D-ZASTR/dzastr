# TODO V1 - D-ZASTR

#  Fonctionnalites minimales V1

### Authentification
- [x] Creer un compte freelance
- [x] Se connecter (login)

### Gestion des clients
- [x] Creer un client
- [x] Lister les clients  V = api
- [x] Modifier un client  V = api
- [x] Supprimer un client  V = api
- [x] Champs client obligatoires: `nom`, `email`, `entreprise`, `adresse`

### Gestion des prestations
- [x] Creer une prestation avec `intitule`   V = api
- [x] Definir un `tarif_heure`  V = api

### Gestion des factures
- [x] Creer une facture a partir d'un client + 1..n prestations
- [x] Calculer automatiquement `total_ht`, `tva`, `total_ttc`
- [x] Gerer le statut de facture
- [x] Statuts supportes: `brouillon`, `envoyee`, `payee`, `annulee`

### Generation PDF
- [x] Generer une facture PDF
- [x] Permettre le telechargement du PDF
- [x] Construire le PDF dynamiquement depuis les donnees saisies
- [x] Inclure au minimum: infos freelance, infos client, date, lignes de prestation, total

## 2) Contraintes techniques et qualite

### Gestion de projet (GitHub Projects)
- [x] Utiliser une organisation GitHub
- [x] Mettre en place un backlog clair
- [x] Rediger des issues en anglais
- [ ] Affecter les taches
- [ ] Rendre le suivi d'avancement visible

### Git et collaboration
- [x] Utiliser une strategie de branches: `main`, `develop`, `feature/*`
- [x] Faire passer les evolutions par Pull Request
- [x] Lier les PR aux issues quand pertinent

### Qualite de code
- [x] Configurer lint
- [x] Configurer Prettier
- [x] Configurer hooks pre-commit

### Tests
- [x] Ajouter des tests unitaires backend (obligatoire)
- [ ] Ajouter un test de charge avec metriques
- [x] Executer les tests automatiquement en CI

### Docker
- [x] Dockerfile frontend
- [x] Dockerfile backend
- [x] `docker-compose.yml` (ou equivalent) pour lancer tout le projet localement

## 3) CI/CD
- [x] Pipeline CI: installation des dependances
- [x] Pipeline CI: lint
- [x] Pipeline CI: verification formatage
- [x] Pipeline CI: tests
- [x] Pipeline CI: build applicatif
- [x] Pipeline CI: build images Docker
- [x] Pipeline CI/CD: publication sur registre
- [x] Pipeline CI/CD: deploiement automatique

## 4) Deploiement
- [x] Application accessible en ligne avec URL fonctionnelle
- [x] Fournir lien frontend
- [x] Fournir lien backend (si pertinent)
- [x] Documenter brievement la strategie de deploiement

## 5) Versioning et releases
- [ ] Creer des tags Git
- [ ] Publier une release GitHub
- [ ] Sortir une version identifiable (ex: `v1.0.0`)

## 6) Documentation
- [x] Mettre a jour `README.md` avec:
  - [x] stack choisie
  - [x] URL de production
  - [x] membres de l'equipe
- [x] Documenter l'API

## 7) Livrables attendus
- [x] Partager le lien du depot GitHub
- [x] Inviter `@ynovzelab`

## 8) Definition of Done (check final)
- [x] Application fonctionnelle de bout en bout (auth, clients, prestations, factures, PDF)
- [x] Workflow projet propre (issues/PR/board)
- [x] Qualite code verifiee (lint + format)
- [x] Tests presents, pertinents, automatisees
- [x] Projet lancable en environnement reproductible (Docker)
- [x] CI/CD operationnelle + deploiement OK
- [x] Documentation complete

# FreelanceFlow v2

## Produit - Facturation & PDF
- [ ] Envoi de facture par email avec un message
- [ ] Joindre automatiquement le PDF genere


## Produit - Logo
- [ ] Uploader un logo
- [ ] Afficher le logo dans les factures PDF generees

## Csv - Exports & reporting
- [ ] Exporter la liste des clients en CSV
- [ ] Exporter la liste des factures en CSV

## Dashboard - Exports & reporting
- [ ] Dashboard: chiffre d'affaires total
- [ ] Dashboard: nombre total de factures
- [ ] Dashboard: chiffre d'affaires par client
- [ ] Dashboard: chiffre d'affaires par mois

## Performance - Cache
- [ ] Mettre en place un systeme de cache (dashboard, listes)
- [ ] Reduire les recalculs inutiles via le cache

## Ops - Observabilite & fiabilite
- [ ] Mettre en place des logs structures


## Monitoring 
- [ ] Rendre accessible un dashboard de monitoring
- [ ] Mettre en place un monitoring simple (etat app, erreurs, metriques)

### Delivery - Pilotage
- [ ] Maintenir un backlog propre
- [ ] Definir un plan de releases et de tags
- [ ] Maintenir la qualite du code et des tests
- [ ] Garder la pipeline CI/CD fonctionnelle
- [ ] Garder l'application deployee et accessible
