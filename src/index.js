import React from 'react'
import { render } from 'react-dom'
import { addTodo, newTodo, removeTodo, toggleTodo } from './exos/algo'
import App from './exos/todo/App'
import './index.css'

const todoList = [
  newTodo('Ranger la chambre'),
  newTodo('Faire le ménage'),
  newTodo('Faire la cuisine'),
]

console.log(todoList)

console.log(toggleTodo(todoList, 1))

render(<App />, document.querySelector('#root'))
