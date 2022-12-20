import "./FormCard.css";

const TransactionForm = (props) => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="transaction form_section">
      <h2>Transfer Money</h2>
      <form className="form" onSubmit={submitFormHandler}>
        <div className="form-group">
          <input type="text" id="user" name="user" className="form-control" />
          <label htmlFor="user">Transfer To</label>
        </div>
        <div className="form-group">
          <input
            type="number"
            min="1"
            id="amount"
            name="amount"
            className="form-control"
          />
          <label htmlFor="amount">Amount</label>
        </div>
        <button type="submit"> -→ </button>
      </form>
    </section>
  );
};

export default TransactionForm;
