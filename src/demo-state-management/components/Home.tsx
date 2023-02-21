/**
 * Ce que reçoit le composant home
 */
export type HomeProps = {
  email: string
}

/**
 * Page d'accueil de l'application
 */
export default function Home({ email }: HomeProps) {
  // JE SOUHAITERAIS RÉCUPERER L'EMAIL
  // DU COMPOSANT CONNECT ????????

  return (
    <>
      <h1>Accueil</h1>
      <p>Bienvenu {email}</p>
    </>
  )
}
