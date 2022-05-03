import React from 'react'
import HeaderBar from '../design1/HeaderBar'
import Content from '../design1/Content'
import FooterBar from '../design1/FooterBar'
import Card from './Card'

/**
 * Contient tout les composants (ainsi
 * que le css pour le design 2)
 *
 * @ref https://www.figma.com/file/uqUjILdONGoXCEImw1iYqv/Untitled?node-id=0%3A1
 */
export default function App() {
  return (
    <>
      <HeaderBar></HeaderBar>
      <Content>
        <Card />
        <Card />
        <Card />
      </Content>
      <FooterBar></FooterBar>
    </>
  )
}
