# Les Modules

Bien évidemment un programme complet, nous n'avons pas qu'une fichier typescript … (vous imaginez que cela fera un fichier beaucoup trop volumineux). Il est possible de séparer notre code dans différents fichiers. Chaque fichiers typescript est une **module**. Ces modules, peuvent **exporter** et **importer** des éléments d'autres modules :

## Les exports et import

Prenons un exemple de 2 fichier `typescript` : 

```typescript
// calc.ts

// On utilise le mot cle `export` afin de pouvoir accéder à la constante
// depuis l'éxtérieur :
export const additionner = (x: number, y: number) => x + y
```

```typescript
// main.ts

// Nous pouvons importer :
import { additionner } from './calc'
// Nous pouvons importer depuis une librairie
import { render } from 'react-dom'

// Maintenant il est possible d'utiliser la fonction :
console.log(additionner(10, 5)) // 15
```

> VSCode s'occupe généralement d'importer et d'exporter automatiquement

## Les imports et export par « défaut »

Il existe un autre façon d'importer / d'exporter : Les imports et export par défaut :

```typescript
// calc.ts
// On exporte une fonction par défaut :
export default function additionner(x: number, y: number) {
  return x + y
}
```

```typescript
// On peut importer par défaut :
import additionner from './calc'

additionner(10, 5) // 15
```

Ces imports sont utilisé lorsqu'un module exporte seulement 1 seule chose (ce sera le cas de nos composants React !).

> **ATTENTION** : Il n'est pas possible d'exporter par défaut plus d'un membre !