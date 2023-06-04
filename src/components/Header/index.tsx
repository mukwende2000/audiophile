import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";

function index() {
  const { pathname } = useLocation();

  return (
    <header>
      <Navbar />
      {pathname != "/" ? <h1>{pathname}</h1> : <h1>Homepage</h1>}
    </header>
  );
}

export default index;
