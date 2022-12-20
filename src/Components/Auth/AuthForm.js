import "./AuthForm.css";

const AuthForm = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="auth-form" onSubmit={submitFormHandler}>
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="USER"
      />
      <input
        type="password"
        name="pin"
        className="form-control"
        placeholder="PIN"
      />
      <button type="submit" className="auth-submit">
        {" "}
        -→{" "}
      </button>
    </form>
  );
};

export default AuthForm;
