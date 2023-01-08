import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = (props) => {
  return (
    <section className={classes.comments}>
      <NewCommentForm quoteId={props.quoteId} />
      {!props.comments && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {props.comments.length === 0 && <p>No comments found!</p>}
      <CommentsList comments={props.comments} />
    </section>
  );
};

export default Comments;
