import { Todo } from "../../types/model";
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete, MdOutlineDownloadDone } from 'react-icons/md';
import { Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoCard = ({ todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])


  const handleInput = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  }

  const handleEdit = () => {
    !edit && !todo.isDone && setEdit(!edit);
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }


  return (
    <Col sm={6} md={5} className="todoCard-Col">
      <form className="todoCard" onSubmit={(e) => handleInput(e, todo.id)}>
        {
          edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              className="todoCard-text"
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : (
            todo.isDone ? (
              <s className="todoCard-text">{todo?.todo}</s>
            ) : (
              <span className="todoCard-text">{todo?.todo}</span>
            )
          )
        }
        <span className="todo-icon" onClick={() => handleEdit()}><AiFillEdit /></span>
        <span className="todo-icon" onClick={() => handleDelete(todo.id)}><MdDelete /></span>
        <span className="todo-icon" onClick={() => handleDone(todo.id)}><MdOutlineDownloadDone /></span>
      </form>
    </Col>
  )
};

export default TodoCard;