import { useLocation } from "react-router-dom";

function index() {
  const { pathname } = useLocation();
  return pathname === "/" ? null : pathname.includes("%") ? null : (
    <h1 className="text-center text-3xl font-manrope font-800 py-8">
      {pathname.slice(1).toUpperCase()}
    </h1>
  );
}

export default index;
