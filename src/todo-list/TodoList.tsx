import { Link } from 'react-router-dom'
import BottomNav from '../shared/BottomNav'
import * as UI from '../shared/ui'
import * as Action from './Action'
import { useTodoListState } from './State'
import { useTodoListEffect } from './Effect'

/**
 * Affiche la liste des todos
 */
export default function TodoList() {
  const state = useTodoListState()

  useTodoListEffect(state)

  return (
    <UI.AppContainer>
      <UI.TopNav>
        <Link to="/">
          <UI.TopNavIcon className="fa-solid fa-circle-chevron-left"></UI.TopNavIcon>
        </Link>
        <UI.TopNavTitle>Petites Courses</UI.TopNavTitle>
      </UI.TopNav>

      <UI.CenteredFlexContainer>
        <UI.Tag>
          <UI.TagIcon className="fa-solid fa-user"></UI.TagIcon>
          <UI.TagLabelContainer>
            <UI.TagLabelEntitled>Par</UI.TagLabelEntitled>
            <UI.TagLabel>{state.username}</UI.TagLabel>
          </UI.TagLabelContainer>
        </UI.Tag>
      </UI.CenteredFlexContainer>

      <UI.StretchFlexContainer>
        <UI.InputContainer>
          <UI.Input
            placeholder="votre todo ..."
            onChange={Action.onTaskChange(state)}
          />
          <UI.InputIcon
            className="fa-solid fa-circle-plus"
            onClick={Action.addTaskToList(state)}
          />
        </UI.InputContainer>
      </UI.StretchFlexContainer>

      <UI.TodoListContainer>
        {state.taskList.length > 0 ? (
          state.taskList.map(todo => (
            <UI.Todo
              key={`todo-${todo.id}`}
              done={todo.done}
              onClick={Action.toggleTodo(state, todo)}
            >
              <UI.TodoLabel>{todo.label}</UI.TodoLabel>
              <UI.TodoIcon
                className="fa-solid fa-trash"
                onClick={Action.removeTodo(state, todo)}
              ></UI.TodoIcon>
            </UI.Todo>
          ))
        ) : (
          <p>Vous n'avez pas encore de taches</p>
        )}
      </UI.TodoListContainer>
      <BottomNav
        topBar={
          <UI.BottomNavAction>
            <UI.BottomNavShare>
              <i className="fa-solid fa-share"></i>
            </UI.BottomNavShare>
            <UI.BottomNavDelete>
              <i className="fa-solid fa-trash"></i>
            </UI.BottomNavDelete>
          </UI.BottomNavAction>
        }
      />
    </UI.AppContainer>
  )
}
