import { Content, FooterBar, HeaderBar } from '../styles/Design1.style'
import { Box } from '../styles/Design2.style'

/**
 * Composant affichant le design n°2
 */
export default function Design2() {
  return (
    <>
      <HeaderBar></HeaderBar>
      <Content>
        <Box />
        <Box />
        <Box />
      </Content>
      <FooterBar></FooterBar>
    </>
  )
}
