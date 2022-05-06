import { Row, Col } from "react-bootstrap";
import { Todos } from "../../types/model";
import TodoCard from "./TodoCard";
import './todoList.css';

const TodoList: React.FC<Todos> = ({ todos, setTodos }: Todos) => {
  return (
    <Row className="todoList">
      <Col md={10}>
        <Row className="todo-secondRow">
          {todos?.length > 0 && todos.map((todo) => (
            <TodoCard
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </Row>
      </Col>
    </Row>
  )
};

export default TodoList;