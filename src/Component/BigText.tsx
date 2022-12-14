import * as Style from '../Style/BigText'
import { BigTextProps } from '../Type/BigText'

/**
 * Affiche un gros text à l'écran.
 */
export default function BigText({ children }: BigTextProps) {
  return (
    <Style.Container>
      <Style.Title>{children}</Style.Title>
    </Style.Container>
  )
}
