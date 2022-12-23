import { Link } from "react-router-dom";
import AuthForm from "../Auth/AuthForm";
import "./MainHeader.css";

const MainHeader = (props) => {
  return (
    <header>
      <p>Good afternoon, {props.name}</p>
      <Link to={"/"}>
        <img src="SVGs/bank-14-svgrepo-com.svg" alt="demo-bank-home" />
      </Link>
      <AuthForm login={props.login} />
    </header>
  );
};

export default MainHeader;
