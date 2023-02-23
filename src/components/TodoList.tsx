import { useStore } from '@nanostores/react'
import {
  addNewTodo,
  changeNewTodo,
  removeTodo,
  TodoListStore,
  toggleTodo,
} from '../stores/TodoList.store'

/**
 * Dislay the todo list on the screen
 */
export default function TodoList() {
  // Retrieve the state
  const { newTodo, todoList } = useStore(TodoListStore)

  return (
    <>
      <h1>Todo list</h1>
      <input type="text" value={newTodo} onChange={changeNewTodo} />
      <button onClick={addNewTodo}>+</button>
      <ul>
        {todoList.map((todo, index) => (
          <li onClick={() => toggleTodo(index)}>
            {todo.label} ({todo.done ? 'Fait' : 'À Faire'})
            <button onClick={() => removeTodo(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </>
  )
}
