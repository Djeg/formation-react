// On importe la librairie React qui permet
// d'écrire avec la syntax JSX
import React from 'react'
// On importe la fonction render depuis la librarie
// react-dom. Cette fonction permet d'afficher
// un composant dans la page
import { createRoot } from 'react-dom/client'
// On importe la fonction App depuis le fichier
// exos/todo/App.js. Cette fonction est un composant
import './index.css'
import App from './todo-app/App'

const root = createRoot(document.querySelector('#root'))

root.render(<App />)
