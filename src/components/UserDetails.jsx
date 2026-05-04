import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

function UserDetails() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();



    useEffect(() => {
        setLoading(true);

        const fetchUser = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = await res.json();
                console.log(data);
                setUser(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user:", error.message);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    return (

        <div>
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        </div>

    )
}

export default UserDetails