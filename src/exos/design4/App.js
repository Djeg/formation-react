import React from 'react'
import HeaderBar from '../design1/HeaderBar'
import Logo from '../design3/Logo'
import Content from '../design1/Content'
import Card from '../design2/Card'
import FooterBar from '../design1/FooterBar'
import CardItem from './CardItem'
import CardNotif from './CardNotif'

/**
 * Contient tout les composants (ainsi
 * que le css pour le design 4)
 *
 * @ref https://www.figma.com/file/uqUjILdONGoXCEImw1iYqv/Untitled?node-id=0%3A1
 */
export default function App() {
  return (
    <>
      <HeaderBar>
        <Logo />
      </HeaderBar>
      <Content>
        <Card></Card>
        <Card></Card>
        <Card>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardNotif />
        </Card>
      </Content>
      <FooterBar>
        <Logo />
      </FooterBar>
    </>
  )
}
