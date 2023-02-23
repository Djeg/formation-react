import { action, map } from 'nanostores'
import { ChangeEvent } from 'react'

/**
 * Contains a todo item
 */
export type Todo = {
  label: string
  done: boolean
}

/**
 * Contains all fields of the todo list state
 */
export type TodoListState = {
  newTodo: string
  todoList: Todo[]
}

/**
 * Store containing the state
 */
export const TodoListStore = map<TodoListState>({
  newTodo: '',
  todoList: [],
})

/**
 * Action allowing to modify the new todo
 */
export const changeNewTodo = action(
  TodoListStore,
  'change new todo',
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey('newTodo', e.currentTarget.value)
  },
)

/**
 * Add a new todo into the list
 */
export const addNewTodo = action(TodoListStore, 'add new todo', store => {
  // Retrieve the new todo
  const { newTodo, todoList } = store.get()

  // Check if the todo is empty
  if (!newTodo.length) {
    return
  }

  // Create the todo
  const todo: Todo = { label: newTodo, done: false }

  // Creates a new list from the todoList and
  // prepend the todo
  const newTodoList = [todo, ...todoList]

  // Place the newList into the store
  store.setKey('todoList', newTodoList)
  store.setKey('newTodo', '')
})

/**
 * Toggle a todo in the list
 */
export const toggleTodo = action(
  TodoListStore,
  'toggle a todo',
  (store, index: number) => {
    // Retrieve the todo list
    const { todoList } = store.get()

    // Create a new todo list
    const newTodoList = todoList.map((todo, i) => {
      // If the index is not the position
      if (i !== index) {
        return todo
      }

      // Return the modified todo
      return {
        ...todo,
        done: !todo.done,
      }
    })

    // we set the new list
    store.setKey('todoList', newTodoList)
  },
)

/**
 * Remove a todo from the list
 */
export const removeTodo = action(
  TodoListStore,
  'remove a todo',
  (store, index: number) => {
    // Retrieve the todo list
    const { todoList } = store.get()

    // Creates a new todo list without the todo at
    // the given index
    const newTodoList = todoList.filter((todo, i) => i !== index)

    // e set the new filtered list
    store.setKey('todoList', newTodoList)
  },
)
