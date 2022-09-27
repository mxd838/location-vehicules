# Présentation
L'application sera développée en TypeScript, React pour la partie client, Nest et Mongo pour les parties serveur et base de données. Le modèle d'architecture choisie est le N-tiers.

## Front
- composants (_components_):
    - stateless
        - layout : composants qu'on retrouve sur chaque page
            - header
            - nav
            - table
                - header row
                - data row
        - shared : composants reutilisables (bouton, input, etc)
            - search bar
            - logo 
            - date input (props: label, attributs debut et fin selection)
            - text input (props: label, regex de verification user input)
            - select input
            - bouton  (validation, create usr/vehicle/location, etc ; props: innerText, fonction)
            - titre page (props: label onglet)
            - label colonne (props: nom)
            - flèches de tri de colonne
        - features :
            - form
    - pages (_statefull_) : composants au plus haut de l'arborescence
        - location
        - vehicules
        - locataires
- services :
    - envoie les requêtes au back
- utils :
    - regroupe la logique non liée à la récupération des données
- models :
    - tous les typages et / ou interfaces nécessaires

## back
- contrôleurs
- services
- dépôts
