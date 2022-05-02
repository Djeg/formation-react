/**
 * En javacript il éxsiste plusieurs façons
 * de faire des fonction
 */

// 1. Les fonctions classique (précompilé)
function ajouter(x, y) {
  return x + y
}

// 2. Les fonctions anonymes (se sont des fonction attaché à des variables)
let ajouter = function (x, y) {
  return x + y
}

// 3. Les fonctions fléchées (se sont des fonctions anonymes plus courte)
let ajouter = (x, y) => {
  return x + y
}

// 4. Les fonctions fléchées à une seule instruction
let ajouter = (x, y) => x + y

// Éxemple avec une fonction bonjour :
function bonjour(nom) {
  return `Bonjour ${nom}`
}

// La méme fonction mais en fléché :
let bonjour = nom => `Bonjour ${nom}`

let notes = [12, 14, 8, 19]

// 1. En utilisant une boucle for
for (let i in notes) {
  notes[i] = notes[i] + 1
}

console.warn(notes) // [13, 15, 9, 20]

// 2. En utilisant le map
const notes2 = notes.map(note => note + 1)

console.warn(notes) // [12, 14, 8, 19]
console.warn(notes2) // [13, 15, 9, 20]
