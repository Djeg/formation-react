import { EleveProps } from '../Type/Eleve'

/**
 * Affiche un élève. Pour cela, précisé dans les props
 * l'élève à afficher.
 */
export default function Eleve({ eleve }: EleveProps) {
  return (
    <>
      <h1>
        Élève {eleve.nom} {eleve.prenom}
      </h1>
      <p>Age : {eleve.age}</p>
      <h2>Notes :</h2>
      <ul>
        {eleve.notes.map((note, index) => (
          <li key={`note-${index}`}>{note} / 20</li>
        ))}
      </ul>
    </>
  )
}
