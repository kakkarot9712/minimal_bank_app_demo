import "./HistoryItem.css";

const HistoryItem = (props) => {
  return (
    <>
      <li className="history_item">
        <div>
          <span className={props.amount[1] < 0 ? "withdrawal" : "deposit"}>
            {props.amount[1] < 0 ? "Withdrawal" : "Deposit"}
          </span>
          <p>
            {new Date(props.amount[0]).toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        <p className="history_amount">{`${props.amount[1]}`}&#8377;</p>
      </li>
      <hr />
    </>
  );
};

export default HistoryItem;
