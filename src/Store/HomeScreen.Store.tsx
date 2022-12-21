import { action, map } from 'nanostores'
import { getFirebaseTodoList } from '../Lib/Firebase'
import { HomeScreenState } from '../Type/HomeScreen.Type'
import { User } from '../Type/LoginScreen.Type'

/**
 * @module HomeScreen.Store
 * @description
 *  Ce module contient l'état de la page d'accueil
 */

/**
 * Contient le store contenant l'état de la page d'accueil
 */
export const HomeScreenStore = map<HomeScreenState>({
  lists: [],
})

/**
 * Action se déclenchant à l'affichage du composant d'accueil qui
 * récupére la liste des choses à faire depuis firebase !
 */
export const initHomeScreen = action(
  HomeScreenStore,
  'initHomeScreen',
  async (store, user: User) => {
    // Récupération de la liste
    const lists = await getFirebaseTodoList(user)

    // Mise à jour de l'état
    store.setKey('lists', lists)
  },
)
