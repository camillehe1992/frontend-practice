import { useState } from "react";
import "./UserHome.css";
import AddUser from "./AddUser";
import UserList from "./UserList";

const DUMMY_USERS = [
  { id: "1", name: "Alice", age: 23 },
  { id: "2", name: "Max", age: 28 },
];

const UserHome = () => {
  const [users, setUsers] = useState(DUMMY_USERS);
  const addUser = (user) => {
    setUsers((previous) => {
      return [user, ...previous];
    });
  };
  return (
    <>
      <AddUser onSave={addUser} />
      <UserList items={users} />
    </>
  );
};

export default UserHome;
