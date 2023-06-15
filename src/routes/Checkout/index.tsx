import { Link } from "react-router-dom";
import Form from "./components/Form";
import Summary from "./components/Summary";

function Checkout() {
  return (
    <form className="bg-gray/20 py-2">
      <div className="container">
        <Link to={"/"}>Go Back</Link>
        <div className="my-10 lg:flex items-start gap-5">
          <Form />
          <Summary />
        </div>
      </div>
    </form>
  );
}

export default Checkout;
