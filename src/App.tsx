import React, { useState } from 'react';
import './App.css';
import InputField from './components/form/InputField';

const  App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);

  return (
    <div className="App">
      <header><h1>Task List</h1></header>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
