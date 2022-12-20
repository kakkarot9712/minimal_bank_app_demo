import "./FormCard.css";

const CloseAccountForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
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
          />
          <label htmlFor="close-user">Confirm User</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
          <label htmlFor="password">Confirm Password</label>
        </div>
        <button type="submit"> -→ </button>
      </form>
    </section>
  );
};

export default CloseAccountForm;
