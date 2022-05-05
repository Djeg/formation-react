export const newTodo = 'test 3'

export const todoList = [
  { label: 'test 3', done: false },
  { label: 'test 2', done: true },
  { label: 'test', done: false },
]

// Vous pouvez tester les fonctions dans le fichier
// src/index.js avec console.log

/**
 * 1. Créer une fonction qui s'appel
 * "newTodo", qui accépte un paramètre
 * "newTodo" (string).
 *
 * Cette fonction doit retourner un objet
 * Todo avec les informations suivante :
 * {
 *    label: {newTodo},
 *    done: false
 * }
 */

/**
 * 2. Créer une fonction "addTodo" qui prend
 * 2 paramètre "todoList" (array de todo),
 * todo (object).
 *
 * Cette fonction doit retourner un nouveau
 * tableaux avec le todo au début du tableau :
 *
 * exemple :
 *
 * addTodo([], { label: 'test', done: false }) ->
 * [ { label: 'test', done: false }} ]
 *
 * Vous pouvez utiliser la restructuration :
 * example :
 *
 * const a = ['john', 'jack']
 * const b = 'rose'
 * const c = [b, ...a] // ['rose', 'john', 'jack']
 */

/**
 * 3. Créer une fonction "removeTodo" qui prend en paramètre
 * un "todoList" (array todo), un index (number).
 *
 * Cette fonction retourne un nouveau tableaux avec le todo
 * à l'index donné de supprimé:
 *
 * exemple :
 * const todoList = [
 *   { label: 'test 1', done: false },
 *   { label: 'test 2', done: false },
 * ]
 *
 * removeTodo(todoList, 0) -> [
 *    { label: 'test 2', done: false },
 * ]
 *
 * Vous pouvez utiliser la méthode "filter" sur un tableaux :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

/**
 * 4. Créer une fonction "toggleTodo" qui prend 2 paramètres,
 * une "todoList" (array todo), un index (number)
 *
 * Cette fonction retourne la tableaux de todo avec l'élément
 * à l'index donné qui passe en done: true ou done: false
 *
 * example:
 *
 * const todoList = [
 *   { label: 'test 1', done: false },
 *   { label: 'test 2', done: false },
 * ]
 *
 * toggleTodo(todoList, 0) -> [
 *   { label: 'test 1', done: true },
 *   { label: 'test 2', done: false },
 * ]
 *
 * toggleTodo(todoList, 0) -> [
 *   { label: 'test 1', done: false },
 *   { label: 'test 2', done: false },
 * ]
 *
 * Vous pouvez utiliser la méthode "map"
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
