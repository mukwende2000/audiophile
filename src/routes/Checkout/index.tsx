import Form from "./components/Form";
import Summary from "./components/Summary";
import Container from "../../components/Container";
import GoBack from "../../components/GoBack";

function Checkout() {
  return (
    <form className="bg-gray/20 py-2">
      <Container>
        <GoBack />
        <div className="my-10 lg:flex items-start gap-5">
          <Form />
          <Summary />
        </div>
      </Container>
    </form>
  );
}

export default Checkout;
