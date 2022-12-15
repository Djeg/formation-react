import React from 'react'
import ReactDOM from 'react-dom/client'
import BigText from './Component/BigText'

// Affiche le composant
ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    {/* Affichage d'un BigText qui accepte des enfants */}
    <BigText>Hello World !</BigText>
  </React.StrictMode>,
)
