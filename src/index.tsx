// On importe la librairie react
import React from 'react'
// On importe la librairie react-dom (elle permet
// d'afficher react sur la page)
import { createRoot } from 'react-dom/client'

//const notes: Array<number> = [12, 13, 8, 14, 20]
//const age: number = 18
//
//// On créé un élément react (JSX)
//const element: JSX.Element = (
//  <div>
//    <h1>Vos notes</h1>
//    {age >= 18 ? (
//      <div>
//        <p>Vous êtes majeur</p>
//      </div>
//    ) : (
//      <div>
//        <p>Vous êtes mineur</p>
//      </div>
//    )}
//    <ul>
//      {notes.map((note, index) => (
//        <li key={`note-${index}`}>{note}/20</li>
//      ))}
//    </ul>
//  </div>
//)

type HelloProps = {
  name: string
  age?: string
}

function Hello({ name, age = '??' }: HelloProps): JSX.Element {
  return (
    <p className="test">
      Hello {name}, vous avez {age} ans :)
    </p>
  )
}

type BigTextProps = {
  children: React.ReactNode
}

function BigText({ children }: BigTextProps): JSX.Element {
  return (
    <div className="gros-text">
      <h1>{children}</h1>
    </div>
  )
}

const element: JSX.Element = (
  <div className="test">
    <BigText>
      Coucou !!
      <br />
      <span>dkfhsdlkfhsdf</span>
    </BigText>
    <Hello name="Rose" />
    <Hello name="Jean" age="35" />
    <Hello name="Jack" age="21" />
    <Hello name="Jane" age="40" />
  </div>
)

// On récupére la balise div#root de notre
// page HTML
const root = document.querySelector('#root')

// Si il n'y a pas de balise root
if (!root) {
  // On léve un erreur
  throw new Error('Oups ... il manque la balise root dans votre index.html')
}

// J'affiche l'élément à l'écran dans la balise
// div#root
createRoot(root).render(element)
