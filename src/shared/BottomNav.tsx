import * as UI from './ui'

export type BottomNavProps = {
  topBar?: JSX.Element
}

export default function BottomNav({ topBar }: BottomNavProps) {
  return (
    <UI.BottomNav>
      {topBar}

      <UI.BottomNavMenu>
        <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
        <UI.BottomNavItem className="fa-solid fa-user"></UI.BottomNavItem>
      </UI.BottomNavMenu>
    </UI.BottomNav>
  )
}
