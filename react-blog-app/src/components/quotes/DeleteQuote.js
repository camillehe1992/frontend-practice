import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./DeleteQuote.module.css";
import Modal from "../UI/Modal";
import useHttp from "../../hooks/use-http";
import { deleteQuote } from "../../lib/api";

function DeleteQuote(props) {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(deleteQuote);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const showAlertHandler = () => {
    setShowAlert(true);
  };

  const cancelHander = () => {
    setShowAlert(false);
  };

  const deleteQuoteHandler = () => {
    sendRequest({
      quoteId: props.quoteId,
      comments: props.comments,
    });
  };

  return (
    <>
      {showAlert && (
        <Modal>
          <p>Are you sure you want to delete this quote?</p>
          <div className={classes.action}>
            <button className="btn" onClick={deleteQuoteHandler}>
              YES
            </button>
            <button className="btn" onClick={cancelHander}>
              NO
            </button>
          </div>
        </Modal>
      )}
      <button className="btn" onClick={showAlertHandler}>
        Delete
      </button>
    </>
  );
}

export default DeleteQuote;
