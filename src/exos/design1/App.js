import React from 'react'
import HeaderBar from './HeaderBar'
import Content from './Content'
import FooterBar from './FooterBar'

/**
 * Contient tout les composants (ainsi
 * que le css pour le design 1)
 *
 * @ref https://www.figma.com/file/uqUjILdONGoXCEImw1iYqv/Untitled?node-id=0%3A1
 */
export default function App() {
  return (
    <>
      <HeaderBar></HeaderBar>
      <Content></Content>
      <FooterBar></FooterBar>
    </>
  )
}
