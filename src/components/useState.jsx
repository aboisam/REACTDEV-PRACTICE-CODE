import { useEffect, useState } from "react";

function Aboi() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   console.log("I am using useEffect");
  // });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Aboi</h1>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
export default Aboi;
