import { SayHelloProps } from '../Type/SayHello'

/**
 * Dis bonjour à une personne
 */
export default function SayHello({ name }: SayHelloProps) {
  return <p>Bonjour {name}</p>
}
