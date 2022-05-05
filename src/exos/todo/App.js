import React, { useState } from 'react'
import {
  AddTodoButton,
  InputText,
  RemoveTodoButton,
  Todo,
  TodoInput,
  TodoLabel,
} from './styled'

export default function App() {
  // State : Ce sont les variables nescessaire
  // au bon fonction de l'application
  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState([
    'Faire les courses',
    'Acheter du pain',
    'Ranger la cuisine',
  ])

  // Event : Ce sont les fonctions à lancé
  // lors des actions (un clique, etc ...)
  const changeNewTodo = ev => {
    setNewTodo(ev.target.value)
  }

  const addTodo = () => {
    setTodoList([newTodo, ...todoList])
    setNewTodo('')
  }

  /* Solution en programation Imperative
  const removeTodo = index => {
    let newTodoList = []

    for (let i in todoList) {
      if (i === index) {
        continue
      }

      newTodoList.push(todoList[i])
    }

    setTodoList(newTodoList)
  }
  */

  // removeTodo = index => () => setTodoList(todoList.filter((todo, i) => i !== index))

  const removeTodo = index =>
    setTodoList(todoList.filter((todo, i) => i !== index))

  return (
    <>
      <TodoInput>
        <InputText value={newTodo} onChange={changeNewTodo} />
        <AddTodoButton onClick={addTodo}>
          <i className="fa-solid fa-circle-plus"></i>
        </AddTodoButton>
      </TodoInput>

      {todoList.map((todo, index) => (
        <Todo key={`todo-${index}`}>
          <TodoLabel>{todo}</TodoLabel>
          <RemoveTodoButton onClick={() => removeTodo(index)}>
            <i class="fa-solid fa-trash"></i>
          </RemoveTodoButton>
        </Todo>
      ))}
    </>
  )
}
