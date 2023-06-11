import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";

function index() {
  const { pathname } = useLocation();

  return (
    <header className="bg-black text-white">
      <div className="container">
        <Navbar />
        {pathname != "/" ? (
          <h1 className="text-center text-3xl font-manrope font-800 py-8">
            {pathname.slice(1).toUpperCase()}
          </h1>
        ) : (
          <h1>Homepage</h1>
        )}
      </div>
    </header>
  );
}

export default index;
