import { SyntheticEvent, useState } from 'react'
import { Container, Content, FooterBar, HeaderBar } from '../Style/Design1'
import { LittleBox } from '../Style/Design2'
import { Logo } from '../Style/Design3'
import { Intruder, SubBox } from '../Style/Design4'

/**
 * Affiche la page du design n°4
 */
export default function Design4() {
  const [inputValue, setInputValue] = useState('')

  /**
   * function d'évenement qui affiche un petit message
   * dans la console
   */
  function onClick() {
    console.log('Clique !!')
  }

  /**
   * Funciton d'événement qui se déclenche à chaque fois
   * que l'input change de valeur
   */
  function onChange(event: SyntheticEvent<HTMLInputElement>) {
    setInputValue(event.currentTarget.value)
  }

  return (
    <Container>
      <HeaderBar>
        <Logo size="medium" onClick={onClick}></Logo>
      </HeaderBar>
      <Content>
        <LittleBox>
          <input type="text" onChange={onChange} />
        </LittleBox>
        <LittleBox>{inputValue}</LittleBox>
        <LittleBox>
          <SubBox></SubBox>
          <SubBox></SubBox>
          <SubBox></SubBox>
          <Intruder />
        </LittleBox>
      </Content>
      <FooterBar>
        <Logo size="small" />
      </FooterBar>
    </Container>
  )
}
