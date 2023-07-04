import LinkItem from "../../components/Navbar/components/LinkItem";
import FeaturedProduct from "./components/FeaturedProduct";
import FeaturedProducts from "./components/FeaturedProducts";
import Container from "../../components/Container";

import speaker from "/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "/shared/desktop/image-category-thumbnail-headphones.png";

function index() {
  return (
    <>
      <FeaturedProduct />
      <nav>
        <Container styles="md:flex">
          <LinkItem mobile path="headphones" url={headphones} />
          <LinkItem mobile path="speakers" url={speaker} />
          <LinkItem mobile path="earphones" url={earphone} />
        </Container>
      </nav>
      <FeaturedProducts />
    </>
  );
}

export default index;
