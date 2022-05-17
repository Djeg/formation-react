import * as UI from '../shared/ui'

/**
 * Ce fichier contient le composant de l'écran
 * de la liste des todos
 */
export default function TodoList() {
  return (
    <UI.AppContainer>
      <UI.TopNav>
        <UI.TopNavIcon className="fa-solid fa-circle-chevron-left"></UI.TopNavIcon>
        <UI.TopNavTitle>Petites Courses</UI.TopNavTitle>
      </UI.TopNav>

      <UI.CenteredFlexContainer>
        <UI.Tag>
          <UI.TagIcon className="fa-solid fa-user"></UI.TagIcon>
          <UI.TagLabel>John Doe</UI.TagLabel>
        </UI.Tag>
      </UI.CenteredFlexContainer>
    </UI.AppContainer>
  )
}
