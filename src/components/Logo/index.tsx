import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function index() {
  return (
    <div>
      <Link to="/">
        <img className="invert" src={logo} alt="AudioPhile Logo" />
      </Link>
    </div>
  );
}

export default index;
