import classes from "./UserList.module.css";
import Card from "../UI/Card";
// import User from "./User";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.items.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
