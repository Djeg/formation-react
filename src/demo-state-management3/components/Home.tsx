import PubSub from 'pubsub-js'
import { useEffect } from 'react'

/**
 * Page d'accueil de l'application
 */
export default function Home() {
  // On lance à l'affichage du composant
  useEffect(() => {
    // Je souscris au topic
    const token = PubSub.subscribe('email', (topic: string, email: string) => {
      console.log('email ?')
      console.log(email)
    })
  }, [])

  return (
    <>
      <h1>Accueil</h1>
      <p>Bienvenu email</p>
    </>
  )
}
