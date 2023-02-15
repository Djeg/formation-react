import { Content, FooterBar, HeaderBar } from '../styles/Design1.style'
import { Box } from '../styles/Design2.style'
import { Logo } from '../styles/Design3.style'
import { Button, GreenBlock, SubBox } from '../styles/Design4.style'

/**
 * Composant affichant le design n°4
 */
export default function Design4() {
  return (
    <>
      <HeaderBar>
        <Logo />
        <GreenBlock />
      </HeaderBar>
      <Content>
        <Box />
        <Box />
        <Box>
          <SubBox />
          <SubBox />
          <SubBox />
          <Button />
        </Box>
      </Content>
      <FooterBar>
        <Logo />
        <GreenBlock />
      </FooterBar>
    </>
  )
}
