import { useState } from 'react'
import * as UI from '../shared/ui'

/**
 * Définie la forme d'un objet Todo
 */
export type Todo = {
  id: string
  label: string
  done: boolean
}

/**
 * Définie ce qu'est une « task »
 */
export type Task = string

/**
 * Définie ce qu'est une list de « task »
 */
export type TaskList = Array<Todo>

/**
 * Ce fichier contient le composant de l'écran
 * de la liste des todos
 */
export default function TodoList() {
  const [task, setTask] = useState<Task>('')
  const [taskList, setTaskList] = useState<TaskList>([])

  console.log('Valeur de task : ' + task)

  const onTaskChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setTask(event.currentTarget.value)
  }

  return (
    <UI.AppContainer>
      <UI.TopNav>
        <UI.TopNavIcon className="fa-solid fa-circle-chevron-left"></UI.TopNavIcon>
        <UI.TopNavTitle>Petites Courses</UI.TopNavTitle>
      </UI.TopNav>

      <UI.CenteredFlexContainer>
        <UI.Tag>
          <UI.TagIcon className="fa-solid fa-user"></UI.TagIcon>
          <UI.TagLabelContainer>
            <UI.TagLabelEntitled>Par</UI.TagLabelEntitled>
            <UI.TagLabel>John</UI.TagLabel>
          </UI.TagLabelContainer>
        </UI.Tag>
      </UI.CenteredFlexContainer>

      <UI.StretchFlexContainer>
        <UI.InputContainer>
          <UI.Input placeholder="votre todo ..." onChange={onTaskChange} />
          <UI.InputIcon className="fa-solid fa-circle-plus" />
        </UI.InputContainer>
      </UI.StretchFlexContainer>

      <UI.TodoListContainer>
        <UI.Todo>
          <UI.TodoLabel>Pommes de terres</UI.TodoLabel>
          <UI.TodoIcon className="fa-solid fa-trash"></UI.TodoIcon>
        </UI.Todo>
        <UI.Todo>
          <UI.TodoLabel>Pommes de terres</UI.TodoLabel>
          <UI.TodoIcon className="fa-solid fa-trash"></UI.TodoIcon>
        </UI.Todo>
        <UI.Todo>
          <UI.TodoLabel>Pommes de terres</UI.TodoLabel>
          <UI.TodoIcon className="fa-solid fa-trash"></UI.TodoIcon>
        </UI.Todo>
        <UI.Todo>
          <UI.TodoLabel>Pommes de terres</UI.TodoLabel>
          <UI.TodoIcon className="fa-solid fa-trash"></UI.TodoIcon>
        </UI.Todo>
      </UI.TodoListContainer>

      <UI.BottomNav>
        <UI.BottomNavAction>
          <UI.BottomNavShare>
            <i className="fa-solid fa-share"></i>
          </UI.BottomNavShare>
          <UI.BottomNavDelete>
            <i className="fa-solid fa-trash"></i>
          </UI.BottomNavDelete>
        </UI.BottomNavAction>

        <UI.BottomNavMenu>
          <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
          <UI.BottomNavItem className="fa-solid fa-user"></UI.BottomNavItem>
        </UI.BottomNavMenu>
      </UI.BottomNav>
    </UI.AppContainer>
  )
}
