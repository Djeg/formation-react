import React from 'react'
import { render } from 'react-dom'

function Hello() {
  return <h1>Bonjour tout le monde !</h1>
}

const html = (
  <div>
    <Hello />
  </div>
)

const div = document.querySelector('#root')

render(html, div)
