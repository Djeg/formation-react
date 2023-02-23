# React Native

React est une librairie javascript permettant de créer des applications. Elle vient avec 2 versions :

1. **React web** : C'est le react classique utilisable sur les navigateurs
2. [**React Native**](https://reactnative.dev/) : C'est une version pour les téléphone mobile. Elle n'utilise pas HTML, aujoud'hui c'est la version la plus utilisé et populaire !

En vrai, React Native c'est la possibilité d'écrire du code Javascript pour des interfaces et de compilé se code en **Native** ! Un code **native**, c'est un code que les **OS** comprennent sans rien installer !

Aujourd'huie 2 **OS** se partage le marché du « native » :

1. Android : Téléphone mobile (Samsung, Xiaomi ...), les télévisions (Philips, Samsung, etc ...), les décodeurs de box, thermomix, les tablettes de véhicules, montre connécté ...
2. iOS : Apple, iphone, ipad, Audi /BNW / Tesla etc ...

Ces OS n'utilise pas HTML pour leurs applications, nous ne sommes plus sur navigateur ! Cependant React Native reprend tout les concepts de HTML et même CSS !

> Depuis 5 ans, React Native est même utilisable sur un navigateur ! Tout le monde utilise React Native

## Installer et configurer React Native

Pour installer React Native, il vous faut :

1. Un ordinateur avec nodejs
2. Un téléphone mobile

> Vous pouvez aussi utiliser la version web de react native sur vous ne possèdez pas de téléphone mobile. Cependant, sur la version web il est impossible d'utiliser la caméra, NFC, le système de fichiers etc ...

React native utilise un « compilateur » pour transformer votre application react en application native, ce compilateur c'est : [expo](https://expo.dev/)

Pour utiliser expo, il faut installer une application sur votre téléphone :

- Android : [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&gl=US)
- Apple : [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779)

Ensuite nous devons créer une application react native. Pour cela, votre ordinateur et un terminal sont nescessaire. Il faudra lancer la commande :

```bash
$ npx create-expo-app ma-super-app --template
```

> Utiliser le template `Blank (Typescript)`

Une fois l'application créé, rendez-vous dans le dossier de l'application et lancé :

```bash
$ npm start
```

Une fois l'application démarrer il vous suffit de scanner le QR Code apparu dans votre application Expo pour afficher l'application.

> **ATTENTION** Votre téléphone doit être connécté au même réseau que votre ordinateur !

> **Pour la version web, il faut installer un petit plugin :**
>
> ```bash
> $ npx expo install @expo/webpack-config@^0.17.2
> ```

## Structure d'une application Native

Dans le dossier de votre application vous retrouvez 2 fichiers important :

1. `App.tsx` : C'est le composant principal permettant d'afficher votre application
2. `app.json` : Permet de configurer notre application des les stores (Apple Store, Play Store)

## Utiliser les composants Native

React Native, n'utilise pas HTML, il utilise plutôt des composant native. Ils ne sont pas très nombreux et voici les principaux

| Composant                                                                                                                                        | Equivalent HTML                                     | Description                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [**View**](https://reactnative.dev/docs/view)                                                                                                    | `div`, `nav`, `section`, `header`, `body`, `footer` | Permet d'afficher une boite                                                                                                             |
| [**Text**](https://reactnative.dev/docs/text)                                                                                                    | `p`, `h1`, `h2` etc ...                             | Permet d'afficher du texte                                                                                                              |
| [**StatusBar**](https://reactnative.dev/docs/statusbar)                                                                                          | -                                                   | Permet de personnaliser l'affichage de la bar de status de votre télphone (c'est la barre du haut avec la batterie, les notifs etc ...) |
| [**TouchableOpacity**](https://reactnative.dev/docs/touchableopacity), [**TouchableHighlight**](https://reactnative.dev/docs/touchablehighlight) | -                                                   | Permet de rendre n'importe quoi « pressable »                                                                                           |
| [**Image**](https://reactnative.dev/docs/image)                                                                                                  | `img`                                               | Affiche une image                                                                                                                       |
| [**ScrollView**](https://reactnative.dev/docs/scrollview)                                                                                        | -                                                   | Permet de rendre une view « scrollable »                                                                                                |

En react native, il et impossible de clicker .... par contre nous pouvons `press`. La `View` et le `Text`, différement de html, on ne peut pas pas les `Press`. Pour rendre n'importe quoi « pressable » nous utilisons le composant `TouchableOpacity`.

> L'événement `onClick` n'éxiste pas c'est `onPress` qui le remplace !

## Le composant [`FlatList`](https://reactnative.dev/docs/flatlist)

Dans beaucoup d'application mobile nous pouvons voir, consulter les listes assez conséquente (liste de videos, liste de produits, liste de petites annonces etc ...). Ces listes peuvent être un gouffre à performance. Fort heureusement, React à conçu un composant pour pallier à ces soucis de performances, il n'est pas obligatoire, parfois un `ScrollView` suffit.

Ce composant c'est la `FlatList`, spécialement pour afficher des listes conséquentes. C'est un liste optimisé par votre téléphone pour ne pas ralentir l'appli. Elle s'utilise bien différement que le `View` et/ou `ScrollView`.

Pour utiliser une `FlatList` il nous faut tout d'abord un tableaux. L'objectif de `FlatList` c'est de boucler sur les élements visible à l'acran et les afficher à l'écran :

```tsx
import { View, FlatFlat } from 'react-native'

const products = [
  { id: 1, name: 'sfhsdfkh' },
  { id: 2, name: 'sfhsdfkh' },
  { id: 3, name: 'sfhsdfkh' },
  { id: 4, name: 'sfhsdfkh' },
  { id: 5, name: 'sfhsdfkh' },
  { id: 6, name: 'sfhsdfkh' },
  { id: 7, name: 'sfhsdfkh' },
  { id: 8, name: 'sfhsdfkh' },
  { id: 9, name: 'sfhsdfkh' },
]

export default function App() {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      >
    </View>
  )
}

```

`FlatList` est un composant accéptant 3 props :

1. `data` : Contient le tableaux que l'on souhaite affiher
2. `keyExtractor` : Contient une fonction qui prend l'élément en cours et son index et qui retourne un identifiant unique permettant d'identifier l'élément à afficher.
3. `renderItem` : Contient une fonction accéptant l'objet suivant : `{ item: ItemEnCours, index: number }`. Son objéctif et d'afficher du JSX pour chaque éléments du tableaux.

## React native et le style

**React Native utilise les propriétés CSS pour styliser une application**. Cependant, il ne supporte pas les fichier CSS :/.

A la place des fichiers CSS nous pouvons utiliser 3 techniques :

1. Mettre le style diréctement dans la props `style`
2. Créer de « fausse feuille de styles » avec React
3. Utiliser [styled components](https://styled-components.com/)

### 1. Mettre le style diréctement dans nos composants

Il est possible de tout simplement mettre notre style dans nos composant :

```tsx
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View
      style={{
        margin: '15px',
        padding: '8px',
      }}
    >
      <Text
        style={{
          fontSize: '24px',
          color: 'red',
        }}
      >
        Hello
      </Text>
    </View>
  )
}
```

> Cette technique bien que très simple, ne suffit à faire de gros projets ... Le code devient très vite illisible.

### Utiliser les feuille de style de react

L'idéee c'est d'imité une feuille de style css. Pour cela nous utilisons `StyleSheet` :

```tsx
import { View, Text, StyleSheet } from 'react-native'

// Création d'une feuille de style
const styles = StyleSheet.create({
  // Classes CSS
  container: {
    // Propriétés CSS
    margin: '15px',
    padding: '8px',
  },
  textRed: {
    color: 'red',
    fontSize: '22px',
  },
})

export default function App() {
  return (
    // On applique le style
    <View style={styles.container}>
      <Text style={styles.textRed}>Hello</Text>
    </View>
  )
}
```

### Styled Components !

Styled components s'utilise de la même manière à une ou deux différence près.

#### 1. Installer les types pour react-native

Pour pouvoir utiliser styled components en typescript avec react native, il faut installer :

```bash
$ npm i styled-components
$ npm i -D @types/styled-components @types/styled-components-react-native
```

#### 2. Utiliser styled components

Pour utiliser styled, nous importons `styled` mais cette fois depuis `styled-components/native`.

Nous ne pouvons plus designer de balise html, mais toutes les balises native sont disponible :

```tsx
import { View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 12px;
  padding: 8px;
`

export const RedText = styled.Text`
  color: red;
  font-size: 22px;
`

export default function App() {
  return (
    // On applique le style
    <Container>
      <RedText>Hello</RedText>
    </Container>
  )
}
```

## Les différence de styles entre native et HTML

#### 1. En Native **tout est en position flex**

#### 2. Les élement ne s'affiche pas de droite à gauche mais de haut en bas (`flex-direction: column`)

#### 3. Nous ne pouvons pas utiliser les unités de mesure suivante : `em` et `rem`

#### 4. Pas de style globale !

#### 5. C'est difficile d'utiliser des polices d'écriture « custom » (de même pour les icones)

#### 6. Pas d'animations CSS en react native :-( (En alternative nous pouvons utiliser [Lottie](https://airbnb.design/lottie/#get-started) et [Spring](https://github.com/pmndrs/react-spring))

### Utiliser les `google fonts`

Pour utiliser une font `google fonts` (exemple: La font `Lobster`), il faut installer un plugin :

```bash
$ npx expo install expo-font @expo-google-fonts/lobster
```

> Vous pouvez vous rendre sur [npm](https://www.npmjs.com/) pour vérifier la syntaxe

Pour utiliser une police d'écriture il faut l'installer sur le téléphone :

```tsx
import { useFonts, Lobster_400medium } from '@expo-google-fonts/lobster'
import styled from 'styled-components/native'

export default function App() {
  // J'installe la font sur le téléphone :
  const [isFontInstalled] = useFonts({ Lobster_400medium })

  // Je m'assure que la police soit installé :
  if (!isFontInstalled) {
    return <Text>Chargement ...</Text>
  }

  return <SuperText>Coucou les amis</SuperText>
}

export const SuperText = styled.Text`
  font-family: 'Lobster_400Medium';
`
```

### Utiliser des `Icones`

Pour utiliser des icones, react native à mis en place une plateforme gratuite avec **tout les icônes des librairies les plus populaire** : [expo icons](https://icons.expo.fyi/)

Pour utiliser ces icônes il faut installer la lirairie suivante :

```bash
$ npm i @expo/vector-icons
```

Mainteant, pour utiliser rendez-vous sur [expo icons](https://icons.expo.fyi/), faite une recherche pour trouver votre icône, cliquez dessus et utiliser le code qu'il vous ai proposé :).

## Le mot de la fin

**React Native** est simple, même plus simple que le HTML, mais aussi assez différents. Le code react native est souvent bien plus simple. Il éxiste d'autre composant et bien d'autres fonctionnalité listé sur la documentation : [expo](https://expo.dev/) et [react native](https://reactnative.dev/docs/flatlist) et bien d'autres ...

- [Detect device](https://www.npmjs.com/package/react-native-device-info)
- ...
