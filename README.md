# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Notes de cours

- Les [contextes en React avec des classes](./context_react.md) 
- Les [contextes en React avec des fonctions](./context_hooks.md) 


## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).


Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI
  - Un UI Kit qui inclut des composants près stylisés que l'on peut customiser pour designer une interface

- Comment importer `material-ui` dans un fichier ?
  ````javascript
  import xxx from '@material-ui/yyy/xxx';
  ````

- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?
  - En utilisant un thème provider et en lui indiquant l'objet thème à prendre: <MuiThemeProvider theme="xxx" ></MuiThemeProvider>

- A quoi sert `createMuiTheme` ?
  - C'est une fonction qui permet de personnaliser une partie des composants qu'en a importés et ainsi écraser les styles par défaut concerné.

- A quoi correspond `palette` ?
  - `Palette` correspond à tout ce qui se rapporte à la couleur

- Comment re-définir des propriétés ?
  - Pour redéfinir des propriétés on peut utiliser  dans `createMuiTheme` la propriété `overrides`.

- A quoi vous fait penser `withStyle` ? Comment l'utiliser ?
  - En important `withStyle` on peut fournir un fichier style au composant que l'on souhaite modifier. Si `createMuiTheme` applique ses propriété de modification à l'ensemble des éléments de la même catégorie (ex : tous les boutons, tous les cards ... ), `withStyle` permet d'appliquer ses propriétés à un ou plusieurs éléments de la même catégorie facilement en précisant dans l'élément la proprité `ClassName` sans modifier l'ensemble.

- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.

```javascript
    import React, {Component} from 'react';
    import Button from '@material-ui/core/Button';
    import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core';
    import { blue } from '@material-ui/core/colors';

    class App extends Component {
        render(){
            return (
                <div>
                    <MuiThemeProvider theme={themePartButton}>
                        <Button className={this.props.classes.leftButton}>Left</Button>
                        <Button>Right</Button>
                    </MuiThemeProvider>
                </div>
            );
        }
    }

    const themePartButton = createMuiTheme({
    typography : {
        fontSize : 25,
        fontFamily : 'Arial',

    },
    palette : {
        primary : blue,
    },
    overrides : {
        MuiButton : {
        root:{

            backgroundColor :"red",
            '&:hover': {
            backgroundColor: "yellow",
            },
            color : "white",

        }
        }
    }
    });

    const styles = {
    leftButton : {
        backgroundColor : "blue"
    }
    };

    export default withStyles(styles)(App);
```
## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?
  - Gestion du CSS dans Javascript. 
  - CSS-in-JS génère des classes dynamique et permet donc d'imbriquer le code CSS. 
  - CSS-in-Js permet aussi de gérer des `scope` .

- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?
  - Les tagged templates permettent d'écrire plus facilement les propriétés en remplaçant les ([""]) par des ``

- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?
  - Sans tagged template :
    ````javascript
        const Button = styled.button(["color : blue;"])
    ````
  - Avec tagged template :
    ````javascript
        const Button = styled.button`
            color : blue;
         `
    ````
- Comment utilise-t-on les props dans cette librarie ?
  - Styled component va passer directement dans le DOM tous les props qu'il reconnait et l'ajoute à travers le composant créée.

- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.
  - Avec la composition :
    ````javascript
    import React from 'react';
    import styled from 'styled-components';

    function App(props){
        return(
            <div>
              <ButtonLeft>Left</ButtonLeft> 
              <ButtonRight>Right</ButtonRight>
            </div>
        );
    }
    const communStyle = `
        color: white;
        font-size: 25;
        font-family: Arial;
        margin: 1em;
        padding: 0.5em 1em;
        border-radius: 8px;
        border: none;
        text-transform: uppercase;
        &:hover {
            color: grey;
            background-color: yellow;
            };
    `
    const ButtonLeft=styled.button`
        ${communStyle}
        background-color: blue;
    `
    const ButtonRight=styled.button`
        ${communStyle}
        background-color: red;
    `
    export default (App);
    ````
  - Avec l'héritage
    ````javascript 
    import React from 'react';
    import styled from 'styled-components';

    function App(props){
        return(
            <div>
              <ButtonLeft>Left</ButtonLeft> 
              <ButtonRight>Right</ButtonRight>
            </div>
        );
    }
    const ButtonLeft=styled.button`
        color: white;
        font-size: 25;
        font-family: Arial;
        margin: 1em;
        padding: 0.5em 1em;
        border-radius: 8px;
        border: none;
        text-transform: uppercase;
        &:hover {
            color: grey;
            background-color: yellow;
            };
        background-color: blue;
    `
    const ButtonRight=styled(ButtonLeft)`
        background-color: red;
    `
    export default (App);
    ````

- Quelles sont les fonctions du contexte de styled-components ?
    - Le contexte de styled-components permet de gérer le thème avec des `ThemeProvider`





## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

>Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
>Activer l'authentification anonyme dans la console de Firebase.

### Installation du projet

Dans la [console de Firebase](https://console.firebase.google.com/), créer un nouveau projet. Dans le menu de gauche, cliquer sur "Authentication", puis cliquer sur l'onglet "Sign-in method", puis sélectionner "Anonymous" et activer le bouton "Enable". Ensuite, cliquer sur "Database" puis créer un "Cloud Firestore". Il est important de mettre la base de données en mode test. 

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase. Ses identifiants Firebase peuvent être récupérés dans la console, en cliquant sur l'engrenage dans le menu à droite, puis sur "Project settings", puis sur l'icone web `</>`. Il faut copier le authDomain, l'apiKey et le projetId dans .env.local. Attention à ne pas mettre d'espace autour des `=` ou de `;`.


### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?
  - Bouton sous la forme d'une classe : 
  ````jsx
    import React from 'react';

    class Button extends React {
      render(){
        const { onClick, children } = this.props;
        return (
          <button onClick={onClick}> { children }</button>;
        )
      }
    }
    export default Button ;
  ````
  - Bouton sous la forme d'une fonction : 
  ````jsx
    import React from 'react';

    const Button = (props) => {
      const { onClick, children } = props;
      return (
        <button onClick={onClick}> { children }</button>;
      )
    }
    export default Button;
  ````
  - class : state -> function : useState
  - Utilisation des hooks : 
  ````jsx
    const [val, setVal] = React.useState(false)
  ````
  - Pour les fonctions tels que componentDidMount ou encore componentDidUnmount, on utilise useEffect :
  ````jsx
  	React.useEffect(() => {
        // code
    })
  ````

- Comment récupérer les props dans une fonction ?
  - Pour récupérer les props dans une fonction, on passe les props dans les paramètres de la fonction : 
  ````jsx
    function fonction(props){
      //code
    }
  ````

- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?
  - BrowserRouter :  
  - UserProvider : partage toute information relative à l'utilisateur actuelle
  - MasterGameProvider :  partage les informations pour créer le jeux, et fournit les résultats du jeux
  - Game Provider : partage les information relative au status des joueurs (ex : si le joueur et toujours en vie ou non)

- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
  - AlivePage.js : indique le rôle du joueur (son nom) quand le joueur est toujours en vie 
  - CastPage.js : page de vote
  - CodePage.js : permet de rejoindre une partie à l'aide du code de la partie (code de la partie et le nom du joueur à saisir)
  - CreatePage.js : Créer une partie de jeux et génére le code de la partie (utilisable par les autres joueur dans CodePage.js)
  - DeadPage.js : indique au joueur qu'il est mort (page de game over)
  - EndPage.js : indique la fin de la partie et les gagnants de cette dernière
  - NightPage.js : indique la nuit 
  - ResultsPage.js : indique le résultat des votes (qui est mort) quand tout le monde a voté, dans le cas échéant qu'on attend la décision de tous les joueurs
  - SpellPage.js : réservé à la sorcière, elle peut alors choisir d'utiliser l'une des potions ou de ne rien faire
  - StartPage.js : page d'accueil qui permet de créer ou de rejoindre une partie

- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?
  - à cause de MasterGameProvider

- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.
  - Fonction qui joue le rôle de `withMyContext` : 
  ````jsx
    export const useGame = () => {
      const {game} = useContext(gameContext);
      return {game};
    };
  ````

- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.o
  - dans `CodePage`, les nouvelles données sont suavegardés dans les useState


### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
- A votre avis, à quoi sert useEffect ?
- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
- Décrire les trois valeurs de retour de `UseUser`.
- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?

### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

