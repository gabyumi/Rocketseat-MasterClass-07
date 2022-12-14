import React, { useState, useEffect } from "react";
import { User } from "./components/User";
import api from "./services/api";

interface IUser {
  name: string;
  email: string;
}
function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <User key={users.indexOf(user)} user={user} />
      ))}
    </div>
  );
}

export default App;
