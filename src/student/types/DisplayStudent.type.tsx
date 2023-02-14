/**
 * Représente un étudiant dans notre application
 */
export type Student = {
  firstname: string
  lastname: string
  age: number
  notes: number[]
}

/**
 * Représente les props envoyé au composant
 * display student
 */
export type DisplayStudentProps = {
  student: Student
}
