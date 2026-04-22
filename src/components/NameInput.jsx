import { useState } from "react";


function NameInput() {
    const [name, setName] = useState("");
    return (
        <div>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text" placeholder="Enter your name" />
            <p>Your name is: {name}</p>
        </div>
    )
}
export default NameInput;