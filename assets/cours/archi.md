# Architecture d'une application React

Dans ce support vous est proposé une architecture de projet pour votre applicatio React. Cependant, React n'étant pas un framework, l'organisation de votre projet dépend de votre équipe et certains choix vous appartient !

## Le dossier `src`

Dans le dossier src vous retrouverez les dossier et fichiers suivant :

- `Component` : Contient les composant react sous forme de fonction. Ce sont probablement les fichiers les plus important. C'est dans ce répertoire que l'on retrouve `App.tsx` (pour les application web, en native, le fichier `App.tsx` se trouve à la racine de votre projet)
- `Lib` : Contient le code des librairies externes à React comme `Firebase`. C'est dans ce dossier que vous pourrez faire vos requêtes à firebase ou à une tout autre API !
- `Store` : Contient les stores `nanostores` ainsi que les actions :). Généralement ils portent le même nom que le composant concerné par le store !
- `Style` : Content les composants stylisé. Généralement les fichiers portent le même nom que le composant stylisé à l'éxception du thème !
- `Type` : Contient les types typescript nescessaire au bon fonctionnement de l'application. Les fichiers portent généralement le même nom que les composants
