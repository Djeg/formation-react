import React, { ReactNode } from 'react'
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

export type SuperTitreProps = {
  children: ReactNode
}

function SuperTitre({ children }: SuperTitreProps) {
  return (
    <div>
      <section>
        <h1>{children}</h1>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SuperTitre>Salut les amis</SuperTitre>
  </React.StrictMode>,
)
