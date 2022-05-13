import { Row, Col } from "react-bootstrap";
import { Todos } from "../../types/model";
import TodoCard from "./TodoCard";
import './todoList.css';

const TodoList: React.FC<Todos> = ({ todos, setTodos }: Todos) => {
  return (
    <Row className="todoList">
      <Col md={5} className="active-task">
        <h3>Active Tasks</h3>
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
      <Col md={5} className="completed-task">
      <h3>Completed Tasks</h3>
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