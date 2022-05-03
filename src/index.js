import React from 'react'
import { render } from 'react-dom'

function BigText({ children }) {
  return (
    <div>
      <p>Voici un big text :</p>
      <h1>{children}</h1>
    </div>
  )
}

const html = (
  <div>
    <BigText>
      Bonjour
      <br />
      <span>Comment allez vous ?</span>
    </BigText>
  </div>
)

const div = document.querySelector('#root')

render(html, div)
