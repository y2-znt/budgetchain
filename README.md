# BudgetChain PoC

Cette application React démontre une maquette Proof of Concept pour le projet BudgetChain, visant à rendre les finances publiques transparentes grâce à la blockchain. L'application présente une liste de transactions en temps réel et une simulation du processus de validation du consensus.

## Fonctionnalités

- **Ledger des transactions :** Affiche en temps réel les transactions avec leurs détails.
- **Validation du consensus :** Simule la validation d'une transaction par plusieurs validateurs.

## Installation

1. Cloner le repository.
2. Exécuter `npm install` pour installer les dépendances.
3. Exécuter `npm start` pour lancer l'application.

## Structure du Projet

BudgetChain-PoC/
├── package.json
├── public/
│ └── index.html
├── src/
│ ├── index.js
│ ├── index.css
│ ├── App.js
│ ├── App.css
│ ├── data/
│ │ └── initialTransactions.js
│ └── components/
│ ├── TransactionTable.js
│ ├── TransactionTable.css
│ ├── ConsensusSection.js
│ └── ConsensusSection.css
└── README.md

## Utilisation

L'application simule l'ajout de nouvelles transactions toutes les 10 secondes. Lorsqu'une transaction en attente est ajoutée, le processus de consensus se lance automatiquement pour la valider. Une fois le consensus atteint, le statut de la transaction passe de "Pending" à "Confirmed".
