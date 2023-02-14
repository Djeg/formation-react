/**
 * Pour chaque constantes present dans ce fichier
 * ajouter le type associé :)
 *
 * exemple :
 *
 * const name = " john"
 *
 * Devient :
 *
 * const name: string = "john"
 */

export const name: string = 'Rose Doe'

export const age: number = 42

export const notes: number[] = [13, 14, 9, 13, 9, 7]

export const isMajor: boolean = true

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

export type User = {
  firstname: string
  lastname: string
  age: number
  notes: number[]
}

export const john: User = {
  firstname: 'john',
  lastname: 'doe',
  age: 42,
  notes: [12, 7, 8, 12, 19],
}

export type Matiere =
  | 'Anglais'
  | 'Math'
  | 'Français'
  | 'Histoire-Geographie'
  | 'Espagnol'
  | 'Physique-Chimie'
  | 'EPS'
  | 'Informatique'

export type ClasseLabel =
  | '6eme'
  | '4eme'
  | '5eme'
  | '3eme'
  | '2nd'
  | 'Terminal'
  | '1er année'
  | '2nd année'

export type Teacher = {
  matiere: Matiere
  classes: ClasseLabel[]
  firstname: string
  lastname: string
}

export const jane: Teacher = {
  matiere: 'Math',
  classes: ['6eme', '5eme', '4eme'],
  firstname: 'jane',
  lastname: 'doe',
}

export type Shoes = {
  brand: string
  model: string
  price: number
  sellBy: User
}

export const nike: Shoes = {
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

export type Category = {
  id: number
  label: string
  category: string
}

export const music: Category = {
  id: 132,
  label: 'musique',
  category: 'music',
}

/**
 * Pour chaque composant, observer le contenue de la fonction
 * et créer le type associé aux « props », ensuite remplacer
 * `any` par votre type !
 */

export type HelloProps = {
  username: string
}

export function Hello({ username }: HelloProps) {
  return <p>Hello {username}</p>
}

export type BigTitleProps = {
  title: string
  className?: string
}

export function BigTitle({ title, className }: BigTitleProps) {
  return <h1 className={`big ${className}`}>{title}</h1>
}

export type BoxProps = {
  isVertical: boolean
  justify: 'center' | 'start' | 'end'
  align: 'center' | 'start' | 'end' | 'stretch'
}

export function Box({ isVertical, justify, align }: BoxProps) {
  return (
    <div
      className={`${isVertical ? 'vertical' : ''} ${justify} ${align}`}
    ></div>
  )
}

export type DisplayStudentProps = {
  student: User
}

export function DisplayStudent({ student }: DisplayStudentProps) {
  return (
    <>
      <h1>
        Élève {student.firstname} {student.lastname}
      </h1>
      <p>Age : {student.age} ans</p>
      <h2>Notes :</h2>
      <ul>
        {student.notes.map((note, index) => (
          <li key={index}>
            Note n°${index + 1} : {note} / 20
          </li>
        ))}
      </ul>
    </>
  )
}

export type DisplayTeacherProps = {
  teacher: Teacher
}

export function DisplayTeacher({ teacher }: DisplayTeacherProps) {
  return (
    <>
      <h1>
        Prof : {teacher.firstname} {teacher.lastname}
      </h1>
      <p>Matière : {teacher.matiere}</p>
    </>
  )
}

/**
 * Devinez le type des props des compasants suivants
 */

export type SuperTitreProps = {
  content: string
  size: 'small' | 'medium' | 'large' | 'big'
}

;<SuperTitre content="Salut tout le monde" size="big" />

export type DisplayStudentProps = {
  student: User
}

;<DisplayStudent student={john} />

export type DisplayEtudiantProps = User

;<DisplayEtudiant
  firstname="john"
  lastname="doe"
  age={43}
  notes={[12, 8, 7, 16, 14]}
/>

export type AlignementType = 'start' | 'end' | 'center'

export type Alignement = {
  horizontal: AlignementType
  vertical: AlignementType
}

export type SuperBoxProps = {
  alignement: Alignement
  mode: string
}

;<SuperBox
  alignement={{ horizontal: 'center', vertical: 'center' }}
  mode="column"
/>
