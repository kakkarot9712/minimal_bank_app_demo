import { useRef } from "react";
import "./FormCard.css";

const CloseAccountForm = (props) => {
  const nameRef = useRef();
  const pinRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    props.close(nameRef.current.value, pinRef.current.value);
    nameRef.current.value = "";
    pinRef.current.value = "";
  };

  return (
    <section className="close form_section">
      <h2>Close Account</h2>
      <form className="form" onSubmit={submitFormHandler}>
        <div className="form-group">
          <input
            type="text"
            id="close-user"
            name="close-user"
            className="form-control"
            ref={nameRef}
          />
          <label htmlFor="close-user">Confirm User</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            ref={pinRef}
          />
          <label htmlFor="password">Confirm Password</label>
        </div>
        <button type="submit"> -→ </button>
      </form>
    </section>
  );
};

export default CloseAccountForm;
