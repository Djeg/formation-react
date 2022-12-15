import { Container, Content, FooterBar, HeaderBar } from '../Style/Design1'

/**
 * Composant affichant le design1 ded l'exercice
 */
export default function Design1() {
  return (
    <Container>
      <HeaderBar>
        <p>Header Bar</p>
      </HeaderBar>
      <Content>
        <p>Le contenue</p>
      </Content>
      <FooterBar>
        <p>Le pied de page</p>
      </FooterBar>
    </Container>
  )
}
