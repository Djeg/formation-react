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
import { removeFirebaseTodoList } from '../Lib/Firebase'
import { LoginScreenStore } from '../Store/LoginScreen.Store'
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
import { User } from '../Type/LoginScreen.Type'

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
  const { id, todos, newTodo, label } = useStore(TodoListScreenStore)
  // Récupération de l'utilisateur connécté
  const { user } = useStore(LoginScreenStore)

  return (
    <>
      {/* le petit enJohn Doe-tête en haut de l'écran */}
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
              <UserUsername>{user?.username || 'Inconnue'}</UserUsername>
            </UserLabelContainer>
          </UserBanner>
        </UserBannerContainer>

        {/* Contient ici l'input pour ajouter un nouveau todo */}
        <TodoInputContainer>
          <TodoInput onChangeText={setNewTodo} value={newTodo}></TodoInput>
          <TouchableOpacity onPress={() => addNewTodo(user as User)}>
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
              <TodoLabel
                done={todo.done}
                onPress={() => toggleTodo(todo.id, user as User)}
              >
                {todo.label}
              </TodoLabel>
              <TouchableOpacity
                onPress={() => deleteTodo(todo.id, user as User)}
              >
                <DeleteTodoIcon icon={faTrash} size={30} />
              </TouchableOpacity>
            </TodoItem>
          )}
        ></FlatList>
      </ContentContainer>

      {/* La barre de navigation du bas */}
      <BottomNavContainer>
        <DeleteListButton>
          <Link
            to="/"
            onPress={e => {
              removeFirebaseTodoList({
                id,
                label,
                todos,
              })
            }}
          >
            <BottomNavIcon icon={faTrash} size={40}></BottomNavIcon>
          </Link>
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
