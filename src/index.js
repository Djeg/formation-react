import {
  bonjour,
  bonjour2,
  displayNotes,
  displayNotesClassique,
  displayStudentName,
  student,
  calculateAverageClassique,
  calculateAverage,
  displayStudent,
} from './exos/revision'

console.log(bonjour('John'))
console.log(bonjour2('john'))
console.log(displayStudentName(student))
console.log(displayNotesClassique(student.notes))
console.log(calculateAverage(student.notes))
console.log(calculateAverageClassique(student.notes))
console.log(displayStudent(student))
