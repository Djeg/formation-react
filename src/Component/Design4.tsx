import { Container, Content, FooterBar, HeaderBar } from '../Style/Design1'
import { LittleBox } from '../Style/Design2'
import { Logo } from '../Style/Design3'
import { Intruder, SubBox } from '../Style/Design4'

/**
 * Affiche la page du design n°4
 */
export default function Design4() {
  return (
    <Container>
      <HeaderBar>
        <Logo size="medium"></Logo>
      </HeaderBar>
      <Content>
        <LittleBox></LittleBox>
        <LittleBox></LittleBox>
        <LittleBox>
          <SubBox></SubBox>
          <SubBox></SubBox>
          <SubBox></SubBox>
          <Intruder />
        </LittleBox>
      </Content>
      <FooterBar></FooterBar>
    </Container>
  )
}
