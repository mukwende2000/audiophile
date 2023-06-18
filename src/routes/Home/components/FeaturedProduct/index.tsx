import Container from "../../../../components/Container";
import LinkBtn from "../../../../components/LinkBtn";
import data from "../../../../data/data.json";

function index() {
  const featuredProduct = data[3];

  return (
    <section
      className={`py-32 h-screen text-center md:text-left bg-bottom bg-cover bg-no-repeat bg-[url('/hero-tablet.jpg')] md:bg-[url('/hero-desktop.jpg')]`}
    >
      <Container>
        <div
          className="uppercase tracking-[.7rem] text-gray"
          aria-label="New Product"
        >
          New Product
        </div>
        <h1 className="font-bold max-w-md uppercase my-5 text-secondary text-4xl lg:text-6xl">
          {featuredProduct.name}
        </h1>
        <p className="max-w-md text-gray my-10">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <LinkBtn
          path={`${featuredProduct.category}/${featuredProduct.name}`}
          backgroundColor="bg-primary hover:bg-primary/90"
          color="text-secondary"
        >
          see product
        </LinkBtn>
      </Container>
    </section>
  );
}

export default index;
