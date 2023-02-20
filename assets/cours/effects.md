# React et les effets

Lorsqu'un utilisateur réalise des actions sur une interfaces il éxistes des « fonctions » (des opérations, des événements, des choses ...) qui le lance à l'insu de l'utilisateur (il n'en a pas conscience) et qui permette le bon fonctionnement de l'application :

#### Exemple : Lors du clique sur play

1. La musique se lance (Effet)
2. Le temps s'écoule (Effet)

Les effets en react sont de simple fonctions. Cependant ces fonctions peuvent échoué, ou être en erreur. Généralement, si un effet échoue l'interface reste utilisable !

On dit que les effets sont « impure » (peuvent échouer) mais aussi « isolé » (Si ils échouent, pas de problèmes on peut continuer d'utiliser l'application !).

## Utiliser `useEffect`

Pour créer un effet en react, il faut utiliser la fonction `useEffect`. Cette fonction accépte 2 paramètres :

1. La fonction de l'effet
2. Un tableaux de dépendance permettant de déclencher l'effet

### Exemple :

```tsx
import { useState, useEffect } from 'react'

export default function ProductList() {
  // On déclare un état, contenant ma liste de produit
  // On déclare aussi un autre état permettant de savoir
  // si ma liste est en train se charger ou pas
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)

  // Déclenchement d'un effet, dès que `loading` vas
  // changer de valeur
  useEffect(() => {
    // Si on ne charge pas les produits
    if (loading === false) {
      // J'arréte l'effet
      return
    }

    // Création d'une asynchrone permettant
    // d'aller cherher les produits
    async function fetchProduct() {
      // Je récupére la liste des produits
      const response = await fetch('https://mes-produit.com/products')

      // Je récupére l'objet javascript de mes produits
      const data = await response.json()

      // On affiche la liste de produit
      setProductList(data)
      // On arréte le chargement
      setLoading(false)
    }

    // Je lance la fonction permettant de chercher les
    // produits
    fetchProduct()
  }, [loading])

  // Affichage de l'interface :
  return (
    <div>
      {loading ? (
        <p>Chargement des produits ...</p>
      ) : (
        productList.map((product, index) => (
          <div key={index}>
            <p>{product.name}</p>
          </div>
        ))
      )}
    </div>
  )
}
```

### Maîtriser les dépendances

Vous devez systèmatiquemet spécifier à `useEffect` un tableaux de dépendance !

1. Si le tableaux contient des dépendances alors l'effet sera lancé à chaque changement de la dépendance. Vous pouvez aussi dans ces effets complexe, spécifier plusieur dépendances à ce moment, c'est un **OU**.
2. Si te tableaux est vide l'effet se lance qu'à **un seul moment** : Lorsque le composant s'affiche !

### Le effets et l'asynchrone

Un effet ne peut pas être **asynchrone** ! Pour cela il est conseillé de créer une fonction asynchrone à l'intérieur de notre effet et de simplement l'appeler à la fin de l'effet.

### Le démarrage et l'arret d'un effet

Un effet peut se démarer (la fonction se lance), mais das certains cas, l'effet peut aussi s'arréter. Pour cela react à mis en place un système très **pragmatique** pour démarer et arréter un effet :

```tsx
useEffect(() => {
  // Fonction de démarage :
  // Elle est lancé lors de l'affichage du composant
  return () => {
    // Fonction d'arrét !
    // Lancé lorsque le composant se désaffiche
  }
}, [])
```

> Les fonctions **d'arrêt** sont facultatifs, elles sont utilisé dans des cas assez prescis lorsque par éxemple nous devons nous connécter puis nous déconnéter d'un serveur etc ...

### Utiliser des fonctions de mise à jour

Lorsque l'on retouche un état dans un effet (que l'on appel, `setXXX`) il est recommandé pour des raisons de performance de spécifier une fonction de mise à jour :

### Exemple : Mise à jour de secondes

#### En dehors d'un useEffect

```tsx
setSeconds(12)
```

#### À l'intérieur d'un useEffect

```tsx
setSeconds(currentSecond => 1 + currentSecond)
```
