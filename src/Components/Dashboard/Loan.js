import "./FormCard.css";

const LoanForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="loan form_section">
      <h2>Request Loan</h2>
      <form className="form" onSubmit={submitFormHandler}>
        <div className="form-group">
          <input
            type="number"
            min="1"
            id="loan-amount"
            name="loan-amount"
            className="form-control"
          />
          <label htmlFor="loan-amount">Amount</label>
        </div>
        <button type="submit"> -→ </button>
      </form>
    </section>
  );
};

export default LoanForm;
