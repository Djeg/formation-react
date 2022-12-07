# Les variables et les types

En Typescript, tout comme en javascript nous pouvons créer des variables en utilisant les mots clefs :

- `let` : Créez un variable à porté réduite. Uniquement disponible dans le bloque en cours.
- `const` : Créer une constante, une variable qui ne peut pas changer (c’est le mot clef le plus répandu)
- `var` : Ancienne manière de créer une variable, mais attention dangereuse concernant la gestion de la mémoire. **À ne pas utiliser !**

## Les types « natif »

Comme son nom l’indique, Typescript est par nature « typé ». C’est à dire qu’une variable appartient à un groupe différent. En fonction de se groupe elle peut représenter des valeurs différentes. Voici les différents types natif de Typescript :

| type        | description                                                  | Exemple                            |
| ----------- | ------------------------------------------------------------ | ---------------------------------- |
| `number`    | Représente n’importe quelle nombre                           | `10`, `25.32`, `0.251`, `54354354` |
| `boolean`   | Représente une valeur pouvant vrai ou faux                   | `true`, `false`                    |
| `string`    | Représente une chaîne de caractère ou du texte. Ces données sont représenté en les encerclant soit entre de guillemets simple (`''`),  double (`""`) ou « backtick » (```) | `"John Doe"`, `'John Doe'`         |
| `undefined` | Représente une valeur nom définit                            | `undefined`                        |
| `null`      | Représente une valeur vide (cela peut porter à confusion avec `undefined` mais il existe une légère différence entre les deux) | `null`                             |
| `any`       | Peut être n'importe quelle valeur cité plus haut             | -                                  |

## Créer des variables

Maintenant que nous connaissons les types primitifs de Javascript et Typescript, nous pouvons facilement créer des variables :

```typescript
// création d'une chaîne de caractère (string)
let nom = 'John';
// le point vigule finale n'est pas obligatoire !
let prenom = 'John'

// Nous pouvons typé notre variable, la forcant ainsi
// à réspécter le type donnée. Cela n'est pas obligatoire !
let age: number = 24

// Génére une erreur, car nous changeons le type de « age » :
age = "45" // Erreur !

// Les constantes fonctionne de la même manière
const isMajor: boolean = true
```

## Les opérateurs

Typescript et Javascript sont de véritable calculatrice ! Afin de résoudre des problèmes et de créer des applications, nous avons besoin d’algorithmes. Pour cela, la première étape est de réaliser des opérations sur nos valeurs et nos variables :

### Les opérateurs sur les `number`

 ```typescript
 // Additionne 2 nombres
 10 + 15 // 25
 // soustraction
 10 - 5 // 5
 // multiplication
 10 * 2 // 20
 // division
 12 / 2 // 6
 // reste de la division
 15 % 2 // 1
 
 // Cela marche aussi avec des variables
 const nombre1: number = 10
 const nombre2 = 20
 
 const resulat = nombre1 + nombre2 // resultat contiendra `30`
 ```

### Les opérateurs `boolean`

```typescript
// l'opérateur « ET »
true && true // true
true && false // false

// l'opérateur « OU »
true || true // true
true || false // true

// L'opérateur « NON »
!true // false
!false // true

// Comparaison « ET PLUS GRAND QUE »
10 > 2 // true
2 > 10 // false

// Comparaison « ET PLUS GRAND QUE OU EGALE »
10 >= 2 // true
2 >= 2 // true

// Comparaison « ET INFERIEUR QUE »
10 < 2 // false
2 < 10 // true

// Comparaison « ET INFERIEUR OU EGALE »
10 <= 2 // false
2 <= 2 // true

// « EST EGALE À »
10 == 10 // true
10 == 12 // false
10 == "10" // true

// « N'EST PAS EGALE À »
10 != 10 // false
10 != 12 // true
10 != "10" // false

// « EST IDENTIQUE À »
10 === 10 // true
10 === 12 // false
10 === "10" // false

// « N'EST PAS IDENTIQUE À »
10 !== 10 // false
10 !== 12 // true
10 !== '10' // true

// Toutes ces opérations marchent aussi avec des variables :
const nom: string = "John"
const age: number = 19

nom === "Jane" // false
age >= 18 // true
nom !== "john" // true (les majuscules compte !)
```

