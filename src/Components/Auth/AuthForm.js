import { useRef } from "react";
import "./AuthForm.css";

const AuthForm = (props) => {
  const userRef = useRef(null);
  const passRef = useRef(null);
  const submitFormHandler = (event) => {
    event.preventDefault();
    props.login(userRef.current.value, passRef.current.value);
    userRef.current.value = "";
    passRef.current.value = "";
  };

  return (
    <form className="auth-form" onSubmit={submitFormHandler}>
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="USER"
        ref={userRef}
      />
      <input
        type="password"
        name="pin"
        className="form-control"
        placeholder="PIN"
        ref={passRef}
      />
      <button type="submit" className="auth-submit">
        {" "}
        -→{" "}
      </button>
    </form>
  );
};

export default AuthForm;
