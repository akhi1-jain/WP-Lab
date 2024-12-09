import {useState} from "react";

export default function Lab7() {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name: </label>
            <input 
                type = "text"
                value = {name}
                onChange={(e) => setName(e.target.value)}u
            />
            <input type="submit"/>
        </form>
    )
}