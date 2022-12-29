import "./User.css";
import Card from "../UI/Card";

const User = (props) => {
  return (
    <Card className="user">
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <h3>{props.age}</h3>
      </div>
    </Card>
  );
};

export default User;
