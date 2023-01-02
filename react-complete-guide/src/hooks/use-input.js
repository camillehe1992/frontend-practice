import { useState } from "react";

const useInput = (validateValue) => {
  const [value, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const onChange = (event) => {
    setEnteredValue(event.target.value);
  };

  const onBlur = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    onChange,
    onBlur,
    reset,
  };
};

export default useInput;
