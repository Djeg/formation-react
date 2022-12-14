/**
 * Représente les données d'un élève
 */
export type Student = {
  nom: string
  prenom: string
  age: number
  notes: number[]
}

/**
 * Props du composant Eleve, permettant d'afficher
 * un élève
 */
export type EleveProps = {
  eleve: Student
}
