import { useState, useEffect } from "react";

function UserProfile({ userId }) {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        const Controller = new AbortController();
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal: Controller.signal })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`http error: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setUser(data);
                setIsLoading(false);
            })

            .catch(error => {
                if (error.name !== "AbortError") {
                    setError(error.message);
                    setIsLoading(false);
                }
            })

        return () => {
            Controller.abort();
        };
    }, [userId]);


    if (isLoading)
        return <p>Loading...</p>;

    if (error)
        return <p>error: {error}</p>;
    if (!user)
        return <p>{null}</p>;
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}

export default UserProfile