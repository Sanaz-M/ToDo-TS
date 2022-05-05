import React, { useState } from 'react';
import './App.css';
import InputField from './components/form/InputField';
import TodoList from './components/todo/TodoList';
import { Todo } from './types/model';

const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [task, setTask] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    todo && setTask([...task, {id: Date.now(), todo: todo, isDone: false}]); setTodo('')
  }

  return (
    <div className="App">
      <header><h1>Task List</h1></header>
      <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd} />
      <TodoList />
    </div>
  );
}

export default App;
