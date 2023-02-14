/**
 * Pour chaque constantes present dans ce fichier
 * ajouter le type associé :)
 *
 * exemple :
 *
 * const name = "john"
 *
 * Devient :
 *
 * const name: string = "john"
 */

export const name = 'Rose Doe'

export const age = 42

export const notes = [13, 14, 9, 13, 9, 7]

export const isMajor = true

/**
 * Pour chaque objet suivant créer un type associé
 * permettant de décrire le contenue de l'objet
 *
 * Exemple :
 *
 * const john = { firstname: 'john', lastname: 'doe' }
 *
 * Devient :
 *
 * type User = { firstname: string, lastname: string }
 * const john: User = { firstname: 'john', lastname: 'doe' }
 */

export const john = {
  firstname: 'john',
  lastname: 'doe',
  age: 42,
  notes: [12, 7, 8, 12, 19],
}

export const jane = {
  matiere: 'Math',
  classes: ['6eme', '5eme', '4eme'],
  firstname: 'jane',
  lastname: 'doe',
}

export const nike = {
  brand: 'nike',
  model: 'Air Force One',
  price: 89.99,
  sellBy: {
    firstname: 'john',
    lastname: 'doe',
    age: 42,
    notes: [12, 7, 8, 12, 19],
  },
}

export const musiq = {
  id: 132,
  label: 'musique',
  category: 'musiq',
}

/**
 * Pour chaque composant, observer le contenue de la fonction
 * et créer le type associé aux « props », ensuite remplacer
 * `any` par votre type !
 */

export function Hello({ username }: any) {
  return <p>Hello {username}</p>
}

export function BigTitle({ title, className }: any) {
  return <h1 className={`big ${className}`}>{title}</h1>
}

export function Box({ isVertical, justify, align }: any) {
  return (
    <div
      className={`${isVertical ? 'vertical' : ''} ${justify} ${align}`}
    ></div>
  )
}

export function DisplayStudent({ student }: any) {
  return (
    <>
      <h1>
        Élève {student.firstname} {student.lastname}
      </h1>
      <p>Age : {student.age} ans</p>
      <h2>Notes :</h2>
      <ul>
        {student.notes.map((note: any, index: any) => (
          <li key={index}>
            Note n°${index + 1} : {note} / 20
          </li>
        ))}
      </ul>
    </>
  )
}

export function DisplayTeacher({ teacher }: any) {
  return (
    <>
      <h1>
        Prof : {teacher.firstname} {teacher.lastname}
      </h1>
      <p>Matière : {teacher.matiere}</p>
    </>
  )
}
