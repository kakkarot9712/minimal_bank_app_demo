import "./Summary.css";
import Timer from "./Timer";

const Summary = (props) => {
  const inward = props.movements
    .filter((tr) => tr[1] > 0)
    .map((el) => el[1])
    .reduce((a, b) => a + b);
  const outward = props.movements
    .filter((tr) => tr[1] < 0)
    .map((el) => el[1])
    .reduce((a, b) => a + b);

  const total = props.movements.map((el) => el[1]).reduce((a, b) => a + b);
  const interest = total + (total * props.interestRate) / 100;
  return (
    <section className="summary_section">
      <div className="summary">
        <p>IN</p>
        <h1 className="in">&#8377;{`${inward}`}</h1>
        <p>OUT</p>
        <h1 className="out">&#8377;{`${outward * -1}`}</h1>
        <p>INTEREST</p>
        <h1 className="in">&#8377;{`${interest.toFixed(2)}`}</h1>
      </div>
      <Timer clear={props.clear} />
    </section>
  );
};

export default Summary;
