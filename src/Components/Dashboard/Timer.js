import useTimer from "../../Hooks/useTImer";

const Timer = (props) => {
  const { min, sec, isEnded } = useTimer(10, 0);
  if (isEnded) {
    setTimeout(() => {
      props.clear();
    }, 500);
  }
  return (
    <p>
      You will be logged out from this session in{" "}
      <span className="timer">{`${min}:${sec < 10 ? "0" + sec : sec}`}</span>
    </p>
  );
};

export default Timer;
