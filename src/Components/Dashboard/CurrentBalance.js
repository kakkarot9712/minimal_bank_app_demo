import "./CurrentBalance.css";

const CurrentBalance = () => {
  return (
    <div className="current-balance">
      <div className="current-balance_heading">
        <h2>Current Balance</h2>
        <p>As of Today</p>
      </div>
      <h1 className="current-balance_amount">$10000</h1>
    </div>
  );
};

export default CurrentBalance;
