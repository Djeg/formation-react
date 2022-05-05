/**
 * Exercice : Carnet de note
 *
 * - Afficher un h1 avec comme titre "Carnet de note"
 * - Afficher un input type number pour rentrer une nouvelle note
 * - Afficher un bouton "Ajouter la note"
 * - Afficher dans une balise <ul> / <li> toutes les notes rentrées
 *
 * Bonus : Ajouter un bouton "supprimer" sur une note dans la balise <li>
 * Bonus : Ajouter la possibilité de modifer une note en éditant un input
 *         dans la balise <li>
 *
 * Lorsque je rentre un chiffre dans l'input, que je clique sur ajouter
 * alors la note doit apparaitre dans la balise <ul> / <li>
 *
 * (Il vvous faudra utiliser la méthode "map" :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * )
 *
 * Bonus : Faire en sorte de pouvoir supprimer une note en cliquant
 *         sur le bouton supprimer
 * Bonus : Pouvoir éditer un notes
 */
import React, { useState } from 'react'

export default function App() {
  const [newNote, setNewNote] = useState(0)
  const [notes, setNotes] = useState([])

  const changeNewNote = ev => {
    let note = parseInt(ev.target.value)

    if (note === NaN) {
      return setNewNote(0)
    }

    if (note < 0) {
      return setNewNote(0)
    }

    if (note > 20) {
      return setNewNote(20)
    }

    setNewNote(note)
  }

  const addNewNote = () => {
    setNotes([newNote, ...notes])
    setNewNote(0)
  }

  /*const deleteNote = index => {
    const newNotes = []

    for (let i in notes) {
      const note = notes[i]

      if (parseInt(i) === index) {
        continue
      }

      newNotes.push(note)
    }

    setNotes(newNotes)
  }*/
  const deleteNote = index => setNotes(notes.filter((note, i) => i !== index))

  /*const changeNote = (index, ev) => {
    const newNote = parseInt(ev.target.value)
    const newNotes = []

    for (let i in notes) {
      let note = notes[i]

      if (parseInt(i) === index) {
        newNotes.push(newNote)
        continue
      }

      newNotes.push(note)
    }

    setNotes(newNotes)
  }*/
  const changeNote = (index, ev) =>
    setNotes(
      notes.map((note, i) => (i === index ? parseInt(ev.target.value) : note)),
    )

  return (
    <>
      <h1>Carnet de notes</h1>
      <input
        type="number"
        placeholder="Votre note ..."
        value={newNote}
        onChange={changeNewNote}
      />
      <button onClick={addNewNote}>Ajouter</button>
      <ul>
        {notes.map((note, index) => {
          return (
            <li key={`note-${index}`}>
              <input
                type="number"
                value={note}
                onChange={ev => changeNote(index, ev)}
              />
              <button onClick={() => deleteNote(index)}>Supprimer</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
