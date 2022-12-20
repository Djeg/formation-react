import {
  faCircleArrowLeft,
  faUser,
  faCirclePlus,
  faTrash,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { useStore } from '@nanostores/react'
import { TouchableOpacity } from 'react-native'
import {
  addNewTodo,
  deleteTodo,
  setNewTodo,
  TodoListScreenStore,
  toggleTodo,
} from '../Store/TodoListScreen.Store'
import {
  BackButton,
  BackIcon,
  BottomNavContainer,
  ContentContainer,
  TopBarContainer,
  TopBarTitle,
  UserBannerContainer,
  UserBanner,
  UserIcon,
  UserLabelContainer,
  UserLabel,
  UserUsername,
  TodoInputContainer,
  TodoAddIcon,
  TodoInput,
  TodoItem,
  TodoLabel,
  DeleteTodoIcon,
  BottomNav,
  BottomNavIcon,
  DeleteListButton,
} from '../Style/TodoListScreen.Style'

/**
 * @module TodoListScreen
 * @description
 *  Contient le composant affichant la liste de chose
 *  à faire
 */

/**
 * Ce composant contient l'écran TodoList permettant d'afficher et d'interargir
 * avec une liste de chose à faire.
 *
 * Vous retrouverez l'écran sur le design Figma
 */
export default function TodoListScreen() {
  const { todos, newTodo } = useStore(TodoListScreenStore)

  return (
    <>
      {/* le petit en-tête en haut de l'écran */}
      <TopBarContainer>
        <BackButton>
          <BackIcon icon={faCircleArrowLeft} size={40} />
        </BackButton>
        <TopBarTitle>Petites courses</TopBarTitle>
      </TopBarContainer>

      {/* Le contenu de la page */}
      <ContentContainer>
        {/* Contient la petite banière avec le nom d'utilisateur :) */}
        <UserBannerContainer>
          <UserBanner>
            <UserIcon icon={faUser} size={35}></UserIcon>
            <UserLabelContainer>
              <UserLabel>Par</UserLabel>
              <UserUsername>John Doe</UserUsername>
            </UserLabelContainer>
          </UserBanner>
        </UserBannerContainer>

        {/* Contient ici l'input pour ajouter un nouveau todo */}
        <TodoInputContainer>
          <TodoInput onChangeText={setNewTodo} value={newTodo}></TodoInput>
          <TouchableOpacity onPress={() => addNewTodo()}>
            <TodoAddIcon icon={faCirclePlus} size={40}></TodoAddIcon>
          </TouchableOpacity>
        </TodoInputContainer>

        {/* on boucle sur toutes les choses à faire */}
        {todos.map(todo => (
          <TodoItem key={todo.id} done={todo.done}>
            <TodoLabel done={todo.done} onPress={() => toggleTodo(todo.id)}>
              {todo.label}
            </TodoLabel>
            <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
              <DeleteTodoIcon icon={faTrash} size={35} />
            </TouchableOpacity>
          </TodoItem>
        ))}
      </ContentContainer>

      {/* La barre de navigation du bas */}
      <BottomNavContainer>
        <DeleteListButton>
          <TouchableOpacity>
            <BottomNavIcon icon={faTrash} size={45}></BottomNavIcon>
          </TouchableOpacity>
        </DeleteListButton>
        <BottomNav>
          <TouchableOpacity>
            <BottomNavIcon icon={faBars} size={45}></BottomNavIcon>
          </TouchableOpacity>
        </BottomNav>
      </BottomNavContainer>
    </>
  )
}
