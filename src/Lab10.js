import {useState} from 'react';

export default function Lab10() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, inputValue]);
        setInputValue('');
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button onClick={handleSubmit}>AddTodo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}