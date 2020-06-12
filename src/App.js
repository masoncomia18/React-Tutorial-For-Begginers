import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "Mason", message: "I am a web developer." },
    { name: "John", message: "My name is John Do." },
    { name: "Harry", message: "Harry Styles is my favorite artist!" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
