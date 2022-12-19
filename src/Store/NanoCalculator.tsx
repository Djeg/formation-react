import { action, map } from 'nanostores'

/**
 * Créer le store qui contient tout l'état de mon composant
 * NanoCalculator
 */
export const nanoCalculatorStore = map({
  displayScreen: '',
  resultScreen: '',
})

/**
 * Action permettant de séléctionner un nombre ou une opération
 * et de l'afficher dans l'écran d'affichage
 */
export const updateDisplayScreen = action(
  nanoCalculatorStore,
  'updateDisplayScreen',
  (store, member: string) => {
    // On récupére ce que contient l'écran d'affichage
    const currentDisplayScreen = store.get().displayScreen

    // On met à jour l'écran d'affichage
    store.setKey('displayScreen', `${currentDisplayScreen}${member}`)
  },
)

/**
 * Remet à 0 l'écran d'affichae et l'écran de résultat
 */
export const reset = action(nanoCalculatorStore, 'reset', store => {
  // On efface le contenue de l'écran d'affichage
  store.setKey('displayScreen', '')
  // On efface le contenue de l'écran de résultat
  store.setKey('resultScreen', '')
})

/**
 * Affiche le résultat d'une opération
 */
export const calculate = action(nanoCalculatorStore, 'calculate', store => {
  // on récupére le contenu de l'écran d'affichage
  const displayScreen = store.get().displayScreen

  // on `eval` la chaine de caractère, nous permettant de retourner
  // le résultat
  const result = eval(displayScreen)

  // On affiche le résultat dans l'écran de résultat
  store.setKey('resultScreen', result)

  // On vide l'écran d'affichage
  store.setKey('displayScreen', '')
})
