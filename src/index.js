import React from 'react'
import { render } from 'react-dom'

const notes = [12, 15, 8, 16, 9]

const html = (
  <div>
    <h1>Vos notes</h1>
    <ul>
      {notes.map((note, index) => (
        <li key={`note-${index}`}>{note} / 20</li>
      ))}
    </ul>
  </div>
)

const div = document.querySelector('#root')

render(html, div)
