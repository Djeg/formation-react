import { action, map } from 'nanostores'
import { ChangeEvent } from 'react'

/**
 * Réprésente une todo list
 */
export type TodoList = {
  name: string
  user: string
}

/**
 * Représente l'état des composants de gestion de liste
 */
export type TodoListState = {
  todoLists: TodoList[]
  newTodoListName: string
}

/**
 * Création du store de todo list
 */
export const TodoListStore = map<TodoListState>({
  todoLists: [],
  newTodoListName: '',
})

/**
 * Change le contenue du nom de la nouvelle liste
 */
export const changeNewTodoListName = action(
  TodoListStore,
  'changeNewTodoListName',
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey('newTodoListName', e.currentTarget.value)
  },
)

/**
 * Action ajoutant une nouvelle TodoList
 */
export const createTodoList = action(TodoListStore, 'createTodoList', store => {
  // Récupére le nom de la todo liste que l'on souhaite
  const { newTodoListName, todoLists } = store.get()

  // Je créer une todo list
  const todoList: TodoList = {
    name: newTodoListName,
    user: 'moi même',
  }

  // J'ajoute ma todo list dans les todoLists
  store.setKey('todoLists', [todoList, ...todoLists])
})
