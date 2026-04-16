# Rapport de test de charge — dzastr-mo

**Date :** 2026-04-16  
**Outil :** Locust 2.43.4  
**Durée :** 60 s  
**Utilisateurs simulés :** 50 (montée en charge : 5 users/s)  
**Hôte cible :** `http://localhost:8080`  
**Données :** 20 clients, 20 services, 50 factures seedés (IDs 1–20 / 1–50)

---

## Résumé global

| Métrique | Valeur |
|---|---|
| Total requêtes | **1 898** |
| Requêtes/s (débit) | **32,2 req/s** |
| **Taux d'échec** | **0 %** |
| Temps de réponse médian | **430 ms** |
| Temps de réponse moyen | **465 ms** |
| Temps de réponse min | **24 ms** |
| Temps de réponse max | **1 726 ms** |
| P90 | **790 ms** |
| P95 | **930 ms** |
| P99 | **1 300 ms** |

---

## Résultats par endpoint

| Méthode | Endpoint | Reqs | Échecs | Médiane | Moy. | Min | Max | P90 | P95 | P99 | req/s |
|---|---|---|---|---|---|---|---|---|---|---|---|
| GET | `/clients/` | 223 | 0 | 430 ms | 446 ms | 25 ms | 1 235 ms | 740 ms | 870 ms | 1 100 ms | 3,78 |
| POST | `/clients/` | 111 | 0 | 470 ms | 506 ms | 71 ms | 1 331 ms | 840 ms | 1 100 ms | 1 300 ms | 1,88 |
| DELETE | `/clients/{id}` | 111 | 0 | 400 ms | 411 ms | 25 ms | 1 197 ms | 620 ms | 810 ms | 1 200 ms | 1,88 |
| GET | `/clients/{id}` | 129 | 0 | 460 ms | 449 ms | 27 ms | 1 311 ms | 780 ms | 900 ms | 1 300 ms | 2,19 |
| PUT | `/clients/{id}` | 69 | 0 | 470 ms | 457 ms | 66 ms | 1 117 ms | 770 ms | 820 ms | 1 100 ms | 1,17 |
| GET | `/invoices/` | 196 | 0 | 550 ms | 597 ms | 101 ms | 1 590 ms | 940 ms | 1 100 ms | 1 600 ms | 3,33 |
| POST | `/invoices/` | 147 | 0 | 460 ms | 475 ms | 33 ms | 1 239 ms | 810 ms | 900 ms | 1 200 ms | 2,49 |
| GET | `/invoices/?User_Id` | 183 | 0 | 460 ms | 515 ms | 67 ms | 1 553 ms | 860 ms | 1 000 ms | 1 500 ms | 3,11 |
| DELETE | `/invoices/{id}` | 147 | 0 | 370 ms | 389 ms | 25 ms | 1 217 ms | 650 ms | 890 ms | 1 100 ms | 2,49 |
| GET | `/invoices/{id}` | 70 | 0 | 390 ms | 429 ms | 46 ms | 1 492 ms | 680 ms | 850 ms | 1 500 ms | 1,19 |
| GET | `/services/` | 184 | 0 | 420 ms | 454 ms | 31 ms | 1 726 ms | 780 ms | 890 ms | 1 100 ms | 3,12 |
| POST | `/services/` | 135 | 0 | 410 ms | 439 ms | 42 ms | 1 262 ms | 780 ms | 880 ms | 1 200 ms | 2,29 |
| DELETE | `/services/{id}` | 135 | 0 | 370 ms | 393 ms | 24 ms | 1 253 ms | 650 ms | 790 ms | 1 100 ms | 2,29 |
| GET | `/services/{id}` | 58 | 0 | 430 ms | 469 ms | 65 ms | 1 295 ms | 840 ms | 920 ms | 1 300 ms | 0,98 |

---

## Observations

- **Stabilité : test 100 % réussi** — aucun échec, aucun crash, aucun 5xx.
- **Débit** : 32,2 req/s soutenus sur 60 s avec 50 utilisateurs simultanés.
- **Endpoint le plus lent** : `GET /invoices/` — médiane 550 ms, max 1 590 ms. 
- **Endpoint le plus rapide** : `DELETE /services/{id}` et `DELETE /invoices/{id}` — médiane 370 ms.
- **P99 global** : 1 300 ms — reste dans des limites acceptables pour une API REST interne.
- **Point d'attention** : les listes sans pagination (`GET /invoices/`, `GET /invoices/?User_Id`) voient leur latence augmenter proportionnellement au volume de données.
