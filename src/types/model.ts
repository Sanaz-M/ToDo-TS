export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface Todos {
  todo?: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}