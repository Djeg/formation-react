// On importe la librairie react
import React from 'react'
// On importe la librairie react-dom (elle permet
// d'afficher react sur la page)
import { createRoot } from 'react-dom/client'
// On importe le composant App (le composant qui contiendra
// l'intégralité de notre application)
import App from './App'

// On récupére la balise div#root de notre
// page HTML
const root = document.querySelector('#root')

// Si il n'y a pas de balise root
if (!root) {
  // On léve un erreur
  throw new Error('Oups ... il manque la balise root dans votre index.html')
}

// J'affiche le composant App à l'écran dans la balise
// div#root
createRoot(root).render(<App />)
