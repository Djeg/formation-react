import {
  AppTitle,
  BikeImg,
  Button,
  ButtonContainer,
  Ellipse,
  Header,
  PageSubTitle,
  PageTitle,
  Splash,
  YellowButton,
  YellowDot,
} from '../styles/GetStarted.style'
import bikeImg from '../assets/bek1.png'

/**
 * Composant affichant l'écran GetStart
 */
export default function GetStarted() {
  return (
    <>
      <Header>
        <AppTitle>Spedah</AppTitle>
        <YellowDot />
      </Header>

      <Splash>
        <Ellipse>
          <BikeImg alt="Velo jaune" src={bikeImg} />
        </Ellipse>
      </Splash>

      <PageTitle>
        Let's <br />
        get started
      </PageTitle>
      <PageSubTitle>Everything start from here</PageSubTitle>

      <ButtonContainer>
        <YellowButton>Log in</YellowButton>
        <Button>Sign up</Button>
      </ButtonContainer>
    </>
  )
}
