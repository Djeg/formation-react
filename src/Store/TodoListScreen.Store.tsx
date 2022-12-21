import { map } from 'nanostores'
import { action } from 'nanostores/action'
import { generateUID } from '../Lib/UniqId'
import { TodoList } from '../Type/HomeScreen.Type'
import { TodoListScreenState } from '../Type/TodoListScreen.Type'

/**
 * @module TodoListScreen.Store
 * @description
 *  Ce module contient l'état et les actions do composant d'affichage
 *  contenant la liste des choses à faire
 */

/**
 * Contient le store contenant l'état du composant
 * d'affichage de la liste des todos
 */
export const TodoListScreenStore = map<TodoListScreenState>({
  id: '1',
  label: 'Petites courses',
  newTodo: '',
  todos: [
    { label: 'Acheter du chocolat', done: false, id: '1' },
    { label: 'Acheter du pain', done: true, id: '2' },
    { label: 'Acheter des patates', done: false, id: '3' },
    { label: 'Acheter de la bière', done: true, id: '4' },
  ],
})

/**
 * Initialize le store avec une todo list
 */
export const initTodoListStore = action(
  TodoListScreenStore,
  'initTodoListStore',
  async (store, list: TodoList) => {
    // on met à jour l'id, le label et les todos
    store.setKey('id', list.id)
    store.setKey('label', list.label)
    store.setKey('todos', list.todos)
  },
)

/**
 * Modifie le nouveau todo à ajouter à la liste
 */
export const setNewTodo = action(
  TodoListScreenStore,
  'setNewTodo',
  (store, newTodo: string) => {
    store.setKey('newTodo', newTodo)
  },
)

/**
 * Ajoute le nouveau todo dans la liste de chose à faire
 */
export const addNewTodo = action(TodoListScreenStore, 'addNewTodo', store => {
  // On récupére le todo en cours
  const newTodo = store.get().newTodo
  // On récupére la liste des todos
  const currentList = store.get().todos
  // On créé un nouveau todo :
  const todo = {
    id: generateUID(),
    label: newTodo,
    done: false,
  }

  // On met à jour la liste des todos
  store.setKey('todos', [todo, ...currentList])

  // On vide le nouveau todo
  store.setKey('newTodo', '')
})

/**
 * Permet de terminer ou de refaire un élément à faire
 */
export const toggleTodo = action(
  TodoListScreenStore,
  'toggleTodo',
  (store, id: string) => {
    // on récupére la liste de todos
    const todos = store.get().todos

    // On met à jour la liste en modifiant le todos
    // avec l'identifiant passé en paramètre :
    store.setKey(
      'todos',
      todos.map(t => (t.id !== id ? t : { ...t, done: !t.done })),
    )
  },
)

/**
 * Permet de supprimer un todo de la lisye
 */
export const deleteTodo = action(
  TodoListScreenStore,
  'deleteTodo',
  (store, id: string) => {
    // on récupére la liste de todos
    const todos = store.get().todos

    // On met à jour la liste en supprimant le todo
    // avec l'identifiant passé en paramètre :
    store.setKey(
      'todos',
      todos.filter(t => t.id !== id),
    )
  },
)
