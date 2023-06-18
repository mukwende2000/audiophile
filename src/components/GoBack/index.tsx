import { FaArrowLeft } from "react-icons/fa";
import { NavigateFunction, useNavigate } from "react-router-dom";

function index() {
  const navigate: NavigateFunction = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <FaArrowLeft className="inline" /> Go Back
    </button>
  );
}

export default index;
