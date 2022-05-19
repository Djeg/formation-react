import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../shared/BottomNav'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const registeredUser = localStorage.getItem('user')

    if (!registeredUser) {
      navigate('/connexion')
    }
  }, [])

  return (
    <>
      <h1>Home</h1>
      <p>
        <Link to="/liste/17532752">La todo liste</Link>
      </p>
      <BottomNav />
    </>
  )
}
