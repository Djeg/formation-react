import * as UI from './ui'

export default function BottomNav() {
  return (
    <UI.BottomNav>
      <UI.BottomNavAction>
        <UI.BottomNavShare>
          <i className="fa-solid fa-share"></i>
        </UI.BottomNavShare>
        <UI.BottomNavDelete>
          <i className="fa-solid fa-trash"></i>
        </UI.BottomNavDelete>
      </UI.BottomNavAction>

      <UI.BottomNavMenu>
        <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
        <UI.BottomNavItem className="fa-solid fa-user"></UI.BottomNavItem>
      </UI.BottomNavMenu>
    </UI.BottomNav>
  )
}
