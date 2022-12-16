import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
} from '@firebase/firestore'
import { Address, Identifiable } from '../Type/Database'
import { firebaseDb } from './Firebase'

/**
 * Je créé un constante contenant le nom de la collection
 * Fireabse pour les address. Ce qui m'évite de la réécrire
 * à chaque et de faire de fautes de frappe
 */
export const ADDRESS_COLLECTION = 'addresses'

/**
 * Insére une nouvelle adresse dans firebase
 */
export async function createAddress(address: Address) {
  // Je récupére d'abord la collection d'address
  const col = collection(firebaseDb, ADDRESS_COLLECTION)
  // On insére des données dans la collection. Nous récupérons
  // une référence firebase qui contiendra l'id de l'address
  // qui vient d'être inséré
  const reference = await addDoc(col, address)

  // La reference contient l'identifiant créé par firebase
  const id = reference.id

  // Je récupére le snapshot du document insérer dans la base de données
  const snap = await getDoc(doc(firebaseDb, ADDRESS_COLLECTION, id))

  // Nous pouvons récupérer l'address (sans son id)
  const newAddress = snap.data()

  // On retourne l'addres avec son id.
  // On utiliser "as" afin de s'assurer du type de retour
  return {
    id: id,
    ...newAddress,
  } as Identifiable<Address>
}

/**
 * Récupére les 10 dernières adresse
 */
export default async function findLast10Address() {
  // On récupére la collection de la base de données :
  const col = collection(firebaseDb, ADDRESS_COLLECTION)
  // On prépare une query :
  const q = query(col, limit(10))

  // On récupére les "snapshots"
  const snaps = await getDocs(q)

  // Pour retourner les address avec les ids, ils nous faut
  // boucler sur les documents des snaps et fusionner l'id et
  // et les données
  return snaps.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Identifiable<Address>[]
}
