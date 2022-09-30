<!-- TODO -->
## Front
- [X] pass props to each component which requires some
    - on each page, get corresponding data with axios
    - pass all the data (getAll) to table as props
    - pass each line of data to data row
        - pass each value of data to data cell
- [ ] typer toutes les props correctement
- [ ] route 404
- [ ] css minimal pour visibilité
- [ ] arborescence des composants modifyForm
## Back
- [ ]   verifier psce ou non id dans dto/interface/schema
## Config
- [ ] docker compose
- [ ] connect back to database

<!-- FIXME -->
- gestion des disponibilités :
    - pas de booleen dans l'entité voiture
    - requêter la collection location pour voir si dates choisies pour tel véhicule ont déjà une entrée

<!-- LOGIC -->
- creation location
    - champ user :
        - getall user pour afficher comme options dans le select
        - getall vehicles pour afficher dans le select
    - champ date :  
        - par defaut location du jour 
        (mettre en 1er champ de selection)
        - 
        - changement de choix de date relance requete pour modifier affichage details vehicule