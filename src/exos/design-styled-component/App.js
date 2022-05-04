import React from 'react'
import { HeaderBar } from './styled'

export default function App() {
  return (
    <>
      <HeaderBar>
        <Logo />
        <Menu />
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
        <FooterMenu />
      </FooterBar>
    </>
  )
}
