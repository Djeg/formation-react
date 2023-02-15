import { Content, FooterBar, HeaderBar } from '../styles/Design1.style'
import { Box } from '../styles/Design2.style'
import { Logo } from '../styles/Design3.style'

/**
 * Composant affichant le design n°3
 */
export default function Design3() {
  return (
    <>
      <HeaderBar>
        <Logo />
      </HeaderBar>
      <Content>
        <Box />
        <Box />
        <Box />
      </Content>
      <FooterBar>
        <Logo />
      </FooterBar>
    </>
  )
}
