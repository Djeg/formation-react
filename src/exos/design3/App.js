import React from 'react'
import HeaderBar from '../design1/HeaderBar'
import Card from '../design2/Card'
import Content from '../design1/Content'
import FooterBar from '../design1/FooterBar'
import Logo from './Logo'

/**
 * Contient tout les composants (ainsi
 * que le css pour le design 3)
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
        <Card></Card>
      </Content>
      <FooterBar>
        <Logo />
      </FooterBar>
    </>
  )
}
