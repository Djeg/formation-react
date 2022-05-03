import React from 'react'
import { render } from 'react-dom'

function Hello({ name, age }) {
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <p>Vous avez {age} ans</p>
    </div>
  )
}

const html = (
  <div>
    <Hello name="John" age={34} />
    <Hello name="Jane" age={12} />
    <Hello name="Rose" age={21} />
    <Hello name="Jack" age={42} />
  </div>
)

const div = document.querySelector('#root')

render(html, div)
