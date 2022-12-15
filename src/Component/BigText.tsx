import { BigTextProps } from '../Type/BigText'

/**
 * Affiche un gros text. Ce composant à besoin de children
 * afin de pouvoir fonctionner corréctement.
 */
export default function BigText({ children }: BigTextProps) {
  return (
    <div className="bigtext">
      <h1>{children}</h1>
    </div>
  )
}
