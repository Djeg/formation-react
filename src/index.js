import React from 'react'
import { render } from 'react-dom'

const name = 'John'

const html = (
  <div>
    <h1>Bonjour {name}</h1>
    <p>Bienvenue sur l'application</p>
  </div>
)

const div = document.querySelector('#root')

render(html, div)
