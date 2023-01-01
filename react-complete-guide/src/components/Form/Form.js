import "./Form.css";
import BasicForm from "./BasicForm";
import SimpleInput from "./SimpleInput";

const Form = () => {
  return (
    <>
      <div className="form">
        <SimpleInput />
      </div>
      <div className="form">
        <BasicForm />
      </div>
    </>
  );
};

export default Form;
