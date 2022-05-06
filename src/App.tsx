import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from './components/form/InputField';
import TodoList from './components/todo/TodoList';
import { Todo } from './types/model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    todo && setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]); setTodo('')
  }

  return (
    <div className="App">
      <header><h1>Task List</h1></header>
      <main>
        <section><InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} /></section>
        <section><TodoList todos={todos} setTodos={setTodos} /></section>
      </main>
    </div>
  );
}

export default App;
