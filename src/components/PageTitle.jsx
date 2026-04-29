import { useState, useEffect } from "react";

function PageTitle({ userName }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${userName} has clicked ${count} times`;

    }, [count, userName]);
    return (
        <>
            <div>PageTitle</div>
            <button onClick={() => setCount(prev => prev + 1)}>ClickMe</button>

        </>
    )
}

export default PageTitle