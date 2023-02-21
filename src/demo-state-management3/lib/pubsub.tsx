import { useEffect } from 'react'

/**
 * Publie un message dans un topic à chaque changement
 * de valeur
 */
export function usePublish(topic: string, value: any) {
  // Déclenchement d'un effet à chaque changement d'email :
  useEffect(() => {
    // On publie dans pubsub
    PubSub.publish(topic, value)
  }, [value])
}
