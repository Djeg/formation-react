import { Container, Content, FooterBar, HeaderBar } from '../Style/Design1'
import { LittleBox } from '../Style/Design2'

/**
 * Affiche la page de l'exercice du design 2
 */
export default function Design2() {
  return (
    <Container>
      <HeaderBar>
        <p>Header</p>
      </HeaderBar>
      <Content>
        <LittleBox></LittleBox>
        <LittleBox></LittleBox>
        <LittleBox></LittleBox>
      </Content>
      <FooterBar>
        <p>footer</p>
      </FooterBar>
    </Container>
  )
}
