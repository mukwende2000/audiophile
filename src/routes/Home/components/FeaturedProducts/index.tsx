import Container from "../../../../components/Container";
import Zx9Speaker from "./Zx9Speaker";
import Zx7Speaker from "./Zx7Speaker";
import Yx1Earphones from "./Yx1Earphones";

function HomeProducts() {
  return (
    <div>
      <Container>
        <Zx9Speaker />
        <Zx7Speaker />
        <Yx1Earphones />
      </Container>
    </div>
  );
}

export default HomeProducts;
