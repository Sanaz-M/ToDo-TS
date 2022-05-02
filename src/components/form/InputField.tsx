import './input.css';

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({ todo, setTodo}: Props) => {
  return (
    <form className="input-form">
      <input 
      value={todo}
      onChange = {(e) => setTodo(e.target.value)}
      type="input" 
      placeholder="Enter a task" 
      className="inputBox"
      />
      <button type="submit" className="btn-submit">Go</button>
    </form>
  )
};

export default InputField;