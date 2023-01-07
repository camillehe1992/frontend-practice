import { useEffect, useCallback } from "react";
import classes from "./CommentItem.module.css";
import { deleteComment } from "../../lib/api";
import useHttp from "../../hooks/use-http";

const CommentItem = (props) => {
  const { sendRequest } = useHttp(deleteComment);
  const { commentId } = props;

  useEffect(() => {
    sendRequest(commentId);
  }, [sendRequest, commentId]);

  const deleteCommentHandler = useCallback(() => {
    sendRequest(commentId);
  }, [sendRequest, commentId]);

  return (
    <li className={classes.item}>
      <p>{props.text}</p>
      <button className="btn" onClick={deleteCommentHandler}>
        Delete
      </button>
    </li>
  );
};

export default CommentItem;
