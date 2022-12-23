import { Link } from "react-router-dom";
import AuthForm from "../Auth/AuthForm";
import "./MainHeader.css";

const MainHeader = (props) => {
  const time = new Date().toLocaleDateString("en-IN", {
    hour: "2-digit",
    hour12: false,
  });
  return (
    <header>
      <p>
        Good{" "}
        {time < 12
          ? "Morning"
          : time > 12 && time < 5
          ? "Afternoon"
          : "Evening"}
        , {props.name}
      </p>
      <Link to={"/"}>
        <img src="SVGs/bank-14-svgrepo-com.svg" alt="demo-bank-home" />
      </Link>
      <AuthForm
        login={props.login}
        loggedIn={props.name !== "User"}
        logout={props.logout}
      />
    </header>
  );
};

export default MainHeader;
