import styled from 'styled-components'

export const TodoInput = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: 0 0.6rem;
  align-items: stretch;
  margin-bottom: 1rem;
  background-color: #ededed;
`

export const InputText = styled.input`
  border: 0;
  padding: 0.6rem;
  flex-grow: 2;
  outline: none;
`

export const AddTodoButton = styled.button`
  border: 0;
  outline: none;
  cursor: pointer;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c8f0c7;
`

export const Todo = styled(TodoInput)`
  background-color: ${props => (!props.done ? '#dcdcdc' : '#c8f0c7')};
  transition: all 0.5s;
  transform: ${props => (props.done ? 'scale(.8)' : 'scale(1)')};
`

export const TodoLabel = styled.p`
  flex-grow: 2;
  padding: 0.6rem;
  margin: 0;
`

export const RemoveTodoButton = styled(AddTodoButton)`
  background-color: #f0c7c7;
`
