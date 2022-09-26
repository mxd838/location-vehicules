# Présentation
L'application sera développée en TypeScript, React pour la partie client, Nest et Mongo pour les parties serveur et base de données. Le modèle d'architecture choisie est le N-tiers.

## Front
- composants (_components_):
    - layout : composants qu'on retrouve sur chaque page (header, nav, footer, etc)
    - shared : composants reutilisables (bouton, input, etc)
    - features : composants liés à une fonctionnalité
    - pages : composants au plus haut de l'arborescence
- services :
    - envoie les requêtes au back
- utils :
    - regroupe la logique non liée à la récupération des données

## back
- contrôleurs
- services
- dépôts
