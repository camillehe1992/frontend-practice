const Input = (props) => {
  return (
    <div className={`form-control ${props.isValid ? "invalid" : ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && <p className="error-text">{props.errorText}</p>}
    </div>
  );
};

export default Input;
