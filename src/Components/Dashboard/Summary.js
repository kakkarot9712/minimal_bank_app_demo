import "./Summary.css";
import Timer from "./Timer";

const Summary = (props) => {
  const inward = props.movements.filter((tr) => tr > 0).reduce((a, b) => a + b);
  const outward = props.movements
    .filter((tr) => tr < 0)
    .reduce((a, b) => a + b);

  const total = props.movements.reduce((a, b) => a + b);
  const interest = total + (total * props.interestRate) / 100;
  return (
    <section className="summary_section">
      <div className="summary">
        <p>IN</p>
        <h1 className="in">{`$${inward}`}</h1>
        <p>OUT</p>
        <h1 className="out">{`$${outward * -1}`}</h1>
        <p>INTEREST</p>
        <h1 className="in">{`$${interest}`}</h1>
      </div>
      <Timer clear={props.clear} />
    </section>
  );
};

export default Summary;
