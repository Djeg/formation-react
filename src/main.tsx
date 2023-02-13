import React from 'react'
import ReactDOM from 'react-dom/client'

function Hello() {
  const resultat = 1 + 1

  return (
    <>
      <h1>Bonjour tout le monde {resultat}</h1>
      <p>Jespère que tout vas bien ?</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
)
