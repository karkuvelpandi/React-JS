import React, { useState } from "react";
import { AddUser } from "./components/AddUser/AddUser";
import { UserList } from "./components/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const submitHandler = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };
  return (
    <main>
      <AddUser onSubmit={submitHandler} />
      {users.length > 0 && <UserList items={users} />}
    </main>
  );
};

export default App;
