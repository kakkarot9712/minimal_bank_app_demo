import "./Summary.css";

const Summary = () => {
  return (
    <section className="summary_section">
      <div className="summary">
        <p>IN</p>
        <h1 className="in">$10,500.00</h1>
        <p>OUT</p>
        <h1 className="out">$10,500.00</h1>
        <p>INTEREST</p>
        <h1 className="in">$10,500.00</h1>
      </div>
      <button type="button">↓ Sort</button>
      <p>
        You will be logged out from this session at{" "}
        <span className="timer">01:10</span>
      </p>
    </section>
  );
};

export default Summary;
