import { BigTextProps } from '../Type/BigText'

/**
 * Affiche un gros text à l'écran.
 */
export default function BigText({ children }: BigTextProps) {
  return (
    <div className="superbig">
      <h1>{children}</h1>
    </div>
  )
}
