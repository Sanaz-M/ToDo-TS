import './input.css';

const InputField = () => {
  return (
    <form className="input-form">
      <input type="input" placeholder="Enter a task" className="inputBox"/>
      <button type="submit" className="btn-submit">Go</button>
    </form>
  )
};

export default InputField;