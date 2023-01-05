import { action, map } from 'nanostores'

/**
 * Store contenant l'état du composant de nouvelle liste
 */
export const NewListStore = map({
  newListTitle: '',
})

/**
 * Change le nom de la nouvelle liste
 */
export const setNewListTitle = action(
  NewListStore,
  'setNewListTitle',
  (store, newTitle) => {
    // On change le contenue du store
    store.setKey('newListTitle', newTitle)
  },
)
