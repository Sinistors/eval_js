# Évaluation JavaScript – Manipulation du DOM & Événements

## Sujet : Gestionnaire de citations inspirantes

Tu vas créer une mini-application web permettant à l’utilisateur d’ajouter, afficher et supprimer des **citations inspirantes**.

Le HTML de base est fourni. Il contient :
- Un champ texte pour entrer une citation.
- Un champ texte pour l’auteur.
- Un bouton "Ajouter citation".
- Une liste vide pour l'affichage des citations.

---

## Fonctionnalités à implémenter

### ✅ 1. Ajout de citation (8 points)
- Lorsqu'on clique sur le bouton "Ajouter", la citation et l’auteur sont récupérés.
- Une nouvelle carte (div, li ou autre) est ajoutée dynamiquement à la liste, avec la citation et l’auteur affichés correctement.

### ✅ 2. Validation des champs (2 points)
- Si l’un des champs est vide, un message d’erreur s’affiche (et aucune carte n’est ajoutée) (alert ou autre, vous décidez).

### ✅ 3. Suppression d’une citation (3 points)
- Chaque carte de citation contient un bouton "Supprimer".
- En cliquant dessus, la carte disparaît du DOM.

### ✅ 4. Affichage agréable (2 points)
- Utilisation d’un minimum de style : bordure, padding, couleur, espacement.
- Texte lisible et bien présenté.

### ✅ 5. Stockage léger avec localStorage (2 points)
- Lorsque l’utilisateur ajoute une citation, elle est aussi enregistrée dans `localStorage`.
- Affiché juste au chargement de votre page le nombre de citations enregistrées.

### ✅ 6. Code propre et structuré (3 points)
- Fonctions bien nommées, commentaires si utile, pas de code copié-collé.

---

## Bonus (jusqu’à 3 points)
- ✅ (2 pts) Champ de recherche dynamique (filtre les citations selon un mot clé saisi).
- ✅ (1 pt) Affichage aléatoire d’une citation "du jour" en haut de la page (citation reprise du localStorage).

---

## Contraintes

- JavaScript Vanilla uniquement.
- Aucun rechargement de page.
- Le HTML de base est fourni.
- Rendre un git publique (dans le pire des cas zip accepté)

---

## Barème : /20

---