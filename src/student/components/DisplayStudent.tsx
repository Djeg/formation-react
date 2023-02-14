import { DisplayStudentProps } from '../types/DisplayStudent.type'

/**
 * Composant permettant un étudiant
 */
export default function DisplayStudent({ student }: DisplayStudentProps) {
  return (
    <>
      <h1>
        Élève : {student.firstname} {student.lastname}
      </h1>
      <p>Age : {student.age} ans</p>
      <h2>Notes :</h2>
      <ul>
        {student.notes.map((note, index) => (
          <li key={index}>
            Note n°{index + 1} : {note} / 20
          </li>
        ))}
      </ul>
    </>
  )
}
