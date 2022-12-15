// On importe la librairie ReactDOM. Il faut savoir que react
// fonctionne aussi avec d'autre technologie que le DOM (Document Object Model)
import ReactDOM from 'react-dom/client'
import App from './Component/App'

// On récupére la balise #root dans lequel notre application
// react vas s'afficher
const root = document.querySelector('#root')

// On s'assure de posséder une balise root dans notre html
if (!root) {
  // Je léve une erreur fatale car l'application ne peut
  // pas fonctionner
  throw new Error(`
    Impossible de démarer l'application car la balise avec l'id #root
    n'éxiste pas dans la page HTML.
  `)
}

// On vas créer une « root » (une racine) React. Cette racine
// est utilisé pour démarrer l'application
const reactRoot = ReactDOM.createRoot(root)

// Affichage du composant HelloWorld :
reactRoot.render(<App />)
