import { setIsSubmitted, setIsSubmitting } from "../../store/FormSlice";
import { useDispatch } from "react-redux";
import { FormEvent } from "react";
import Form from "./components/Form";
import Summary from "./components/Summary";
import Container from "../../components/Container";
import GoBack from "../../components/GoBack";
import Dialog from "../../components/Dialog/Dialog";

function Checkout() {
  const dispatch = useDispatch();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    dispatch(setIsSubmitting());

    setTimeout(() => {
      dispatch(setIsSubmitting());
      dispatch(setIsSubmitted());
    }, 2000);
  }

  return (
    <>
      <form className="bg-gray/20 py-2" onSubmit={handleSubmit}>
        <Dialog />
        <Container>
          <GoBack />
          <div className="my-10 lg:flex items-start gap-5">
            <Form />
            <Summary />
          </div>
        </Container>
      </form>
    </>
  );
}

export default Checkout;
