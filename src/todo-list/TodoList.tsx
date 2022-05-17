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
          <UI.TagLabelContainer>
            <UI.TagLabelEntitled>Par</UI.TagLabelEntitled>
            <UI.TagLabel>John</UI.TagLabel>
          </UI.TagLabelContainer>
        </UI.Tag>
      </UI.CenteredFlexContainer>

      <UI.StretchFlexContainer>
        <UI.InputContainer>
          <UI.Input placeholder="votre todo ..." />
          <UI.InputIcon className="fa-solid fa-circle-plus" />
        </UI.InputContainer>
      </UI.StretchFlexContainer>

      <UI.TodoListContainer>
        <UI.Todo>
          <UI.TodoLabel>Pommes de terres</UI.TodoLabel>
          <UI.TodoIcon className="fa-solid fa-trash"></UI.TodoIcon>
        </UI.Todo>
      </UI.TodoListContainer>

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
    </UI.AppContainer>
  )
}
