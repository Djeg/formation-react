import { StrictMode } from 'react'
import { Student } from '../types/DisplayStudent.type'
import DisplayStudent from './DisplayStudent'
import '../styles/style.css'

/**
 * Composant principal de l'application des étudiants
 */
export default function App() {
  const students: Student[] = [
    {
      firstname: 'john',
      lastname: 'doe',
      age: 38,
      notes: [12, 14, 7, 8, 16],
    },
    {
      firstname: 'jane',
      lastname: 'doe',
      age: 34,
      notes: [12, 11, 10, 17, 9],
    },
    {
      firstname: 'rose',
      lastname: 'doe',
      age: 32,
      notes: [18, 12, 13, 7, 17],
    },
  ]

  return (
    <StrictMode>
      {students.map((student, index) => (
        <DisplayStudent student={student} key={index} />
      ))}
    </StrictMode>
  )
}
