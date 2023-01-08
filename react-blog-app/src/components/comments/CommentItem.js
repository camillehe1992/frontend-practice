import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  const localDate = new Date(props.createdAt).toLocaleString();
  return (
    <li className={classes.item}>
      <p className={classes.date}>{localDate}</p>
      <p>{props.text}</p>
    </li>
  );
};

export default CommentItem;
