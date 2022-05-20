import Profile from '../profile/Profile'
import * as UI from './ui'
import { useState } from 'react'

export type BottomNavProps = {
  topBar?: JSX.Element
}

export default function BottomNav({ topBar }: BottomNavProps) {
  const [profileOpen, setProfileOpen] = useState<boolean>(false)

  // const openProfile = () => setProfileOpen(true)
  // const closeProfile = () => setProfileOpen(false)

  const toggleProfile = () => setProfileOpen(!profileOpen)

  return (
    <UI.BottomNav>
      {topBar}

      <UI.BottomNavMenu>
        <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
        <UI.BottomNavItem
          className="fa-solid fa-user"
          onClick={toggleProfile}
        ></UI.BottomNavItem>
      </UI.BottomNavMenu>
      <Profile open={profileOpen} onClose={toggleProfile} />
    </UI.BottomNav>
  )
}
