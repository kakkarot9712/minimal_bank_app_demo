import "./HistoryItem.css";

const HistoryItem = (props) => {
  return (
    <>
      <li className="history_item">
        <div>
          <span className={props.amount < 0 ? "withdrawal" : "deposit"}>
            {props.amount < 0 ? "Withdrawal" : "Deposit"}
          </span>
          <p>
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "2-digit",
              day: "numeric",
            })}
          </p>
        </div>
        <p className="history_amount">{`${props.amount}$`}</p>
      </li>
      <hr />
    </>
  );
};

export default HistoryItem;
