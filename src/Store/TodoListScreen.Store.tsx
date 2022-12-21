import { map } from 'nanostores'
import { action } from 'nanostores/action'
import { setFirebaseTodoList } from '../Lib/Firebase'
import { generateUID } from '../Lib/UniqId'
import { TodoList } from '../Type/HomeScreen.Type'
import { User } from '../Type/LoginScreen.Type'
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
export const addNewTodo = action(
  TodoListScreenStore,
  'addNewTodo',
  async (store, user: User) => {
    // On récupére le todo en cours
    const { newTodo, id, label, todos } = store.get()
    // On créé un nouveau todo :
    const todo = {
      id: generateUID(),
      label: newTodo,
      done: false,
    }

    // On créer un nouveau tableaux contenant le nouveau
    // todo
    const newTodos = [todo, ...todos]

    // On met à jour la liste des todos
    store.setKey('todos', newTodos)

    // On vide le nouveau todo
    store.setKey('newTodo', '')

    // On synchronize firebase
    await setFirebaseTodoList(user, {
      id,
      label,
      todos: newTodos,
    })
  },
)

/**
 * Permet de terminer ou de refaire un élément à faire
 */
export const toggleTodo = action(
  TodoListScreenStore,
  'toggleTodo',
  async (store, id: string, user: User) => {
    // on récupére l'état
    const { todos, label, id: listId } = store.get()

    // ON créé un nouveau tableaux contenant les todos complété
    const newTodos = todos.map(t => (t.id !== id ? t : { ...t, done: !t.done }))

    // On met à jour la liste en modifiant le todos
    store.setKey('todos', newTodos)

    // on synchronize avec firebase
    await setFirebaseTodoList(user, {
      id: listId,
      label,
      todos: newTodos,
    })
  },
)

/**
 * Permet de supprimer un todo de la lisye
 */
export const deleteTodo = action(
  TodoListScreenStore,
  'deleteTodo',
  async (store, id: string, user: User) => {
    // on récupére l'état
    const { todos, label, id: listId } = store.get()

    // ON créé un nouveau tableaux contenant les todos moins le todo
    // à supprimer
    const newTodos = todos.filter(t => t.id !== id)

    // On met à jour la liste en supprimant le todo
    // avec l'identifiant passé en paramètre :
    store.setKey('todos', newTodos)

    // on synchronize avec firebase
    await setFirebaseTodoList(user, {
      id: listId,
      label,
      todos: newTodos,
    })
  },
)
