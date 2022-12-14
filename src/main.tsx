import React from 'react'
import ReactDOM from 'react-dom/client'
import SayHello from './Component/SayHello'

// Affiche le composant
ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <SayHello name="John" />
  </React.StrictMode>,
)
