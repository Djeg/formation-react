import { action, map } from 'nanostores'
import { setFirebaseTodoList } from '../Lib/Firebase'
import { generateUID } from '../Lib/UniqId'
import { User } from '../Type/LoginScreen.Type'
import { initTodoListStore } from './TodoListScreen.Store'

/**
 * @module NewListScreen.Store
 * @description
 *  Ce module contient l'état et les actions de la
 *  création d'une nouvelle liste
 */

/**
 * Store contenant l'état du composant de création d'une
 * nouvelle list
 */
export const NewListScreenStore = map({
  label: '',
})

/**
 * Action permettant de mettre à jour le label
 * de la nouvelle liste
 */
export const setLabel = action(
  NewListScreenStore,
  'setLabel',
  (store, label: string) => {
    store.setKey('label', label)
  },
)

/**
 * Action permettant d'initialiser l'état de la création
 * d'une nouvelle liste
 */
export const initNewListStore = action(
  NewListScreenStore,
  'initNewListScreen',
  store => {
    store.setKey('label', '')
  },
)

/**
 * Action permettant de créer un nouvelle liste. C'est l'action
 * s'éxécutant lors du clique sur plus
 */
export const createNewList = action(
  NewListScreenStore,
  'createNewList',
  async (store, user: User) => {
    // On récupére le nom de la liste
    const label = store.get().label
    // On créer une nouvelle TodoList
    const list = {
      id: generateUID(),
      label: label,
      todos: [],
    }

    // On met à jour l'état de composant TodoListScreen
    initTodoListStore(list)

    // On créé la liste sur firebase
    await setFirebaseTodoList(user, list)
  },
)
