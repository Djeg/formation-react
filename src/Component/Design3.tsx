import { Container, Content, FooterBar, HeaderBar } from '../Style/Design1'
import { LittleBox } from '../Style/Design2'
import { Logo } from '../Style/Design3'

/**
 * Affiche la page de l'exercice de design 3
 */
export default function Design3() {
  return (
    <Container>
      <HeaderBar>
        <Logo />
      </HeaderBar>
      <Content>
        <LittleBox></LittleBox>
        <LittleBox></LittleBox>
        <LittleBox></LittleBox>
      </Content>
      <FooterBar></FooterBar>
    </Container>
  )
}
