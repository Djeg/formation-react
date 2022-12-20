/**
 * @module UniqId
 * @description
 *  Contient des fonctions d'aide à la génération d'identifiant unique
 */

/**
 * Génére un identifiant unique
 */
export function generateUID() {
  // On prend la date du jour en milliseconds
  const now = Date.now()

  // On génére 10 nombre aléatoire
  const uid = Array(10)
    .fill(null)
    .map(() => Math.random())
    .join('')

  // On assemble les 2
  return `${uid}-${now}`
}
