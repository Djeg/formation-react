import { useStore } from '@nanostores/react'
import { Navigate, useParams } from 'react-router-dom'
import {
  addNewTask,
  changeNewTask,
  deleteTask,
  removeTasks,
  TodoListStore,
  toggleTask,
} from '../stores/TodoListStore'
import { InputGroup, Title } from '../styles/Auth.style'

/**
 * Composant de todo liste
 */
export default function TodoList() {
  const { index }: any = useParams()
  const { todoLists } = useStore(TodoListStore)
  const position = parseFloat(index)
  const list = todoLists[position]

  if (!list) {
    return <Navigate to="/"></Navigate>
  }

  return (
    <>
      <Title>{list.name}</Title>
      <InputGroup>
        <input
          type="text"
          placeholder="nouvelle tache"
          value={list.newTask}
          onChange={e => changeNewTask(position, e)}
        />
        <i
          className="fa-solid fa-circle-plus"
          onClick={() => addNewTask(position)}
        ></i>
      </InputGroup>

      {list.tasks.map((task, i) => (
        <div onClick={() => toggleTask(position, i)} key={index}>
          <p>
            {task.name} ({task.done ? 'Fait' : 'À faire'})
          </p>
          <i
            className="fa-solid fa-trash"
            onClick={() => deleteTask(position, i)}
          ></i>
        </div>
      ))}

      <button onClick={() => removeTasks(position)}>Tout supprimer</button>
    </>
  )
}
