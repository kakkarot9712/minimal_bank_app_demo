import { useRef } from "react";
import "./FormCard.css";

const LoanForm = (props) => {
  const amountRef = useRef(null);
  const submitFormHandler = (event) => {
    event.preventDefault();
    props.loan(amountRef.current.value);
    amountRef.current.value = "";
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
            ref={amountRef}
          />
          <label htmlFor="loan-amount">Amount</label>
        </div>
        <button type="submit"> -→ </button>
      </form>
    </section>
  );
};

export default LoanForm;
