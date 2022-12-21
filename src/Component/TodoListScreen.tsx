import {
  faCircleArrowLeft,
  faUser,
  faCirclePlus,
  faTrash,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { useStore } from '@nanostores/react'
import { TouchableOpacity, FlatList } from 'react-native'
import { Link } from 'react-router-native'
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
  const { todos, newTodo, label } = useStore(TodoListScreenStore)

  return (
    <>
      {/* le petit en-tête en haut de l'écran */}
      <TopBarContainer>
        <BackButton to="/">
          <BackIcon icon={faCircleArrowLeft} size={40} />
        </BackButton>
        <TopBarTitle>{label}</TopBarTitle>
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

        {/*
            on boucle sur toutes les choses à faire en utilisant un flat list
            pour de bien meilleurs performance !
        */}
        <FlatList
          data={todos}
          keyExtractor={todo => todo.id}
          renderItem={({ item: todo }) => (
            <TodoItem key={todo.id} done={todo.done}>
              <TodoLabel done={todo.done} onPress={() => toggleTodo(todo.id)}>
                {todo.label}
              </TodoLabel>
              <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <DeleteTodoIcon icon={faTrash} size={30} />
              </TouchableOpacity>
            </TodoItem>
          )}
        ></FlatList>
      </ContentContainer>

      {/* La barre de navigation du bas */}
      <BottomNavContainer>
        <DeleteListButton>
          <TouchableOpacity>
            <BottomNavIcon icon={faTrash} size={40}></BottomNavIcon>
          </TouchableOpacity>
        </DeleteListButton>
        <BottomNav>
          <Link to="/menu">
            <BottomNavIcon icon={faBars} size={40}></BottomNavIcon>
          </Link>
        </BottomNav>
      </BottomNavContainer>
    </>
  )
}
