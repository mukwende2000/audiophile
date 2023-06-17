import LinkBtn from "../../components/LinkBtn";
import LinkItem from "../../components/Navbar/components/LinkItem";
import HomeProducts from "./components/HomeProducts";
import speaker from "/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "/shared/desktop/image-category-thumbnail-headphones.png";
import data from "../../data/data.json";

function index() {
  const featuredProduct = data[3];

  return (
    <>
      <section
        className={`text-center md:text-left bg-bottom bg-cover bg-no-repeat bg-[url('/hero-tablet.jpg')] md:bg-[url('/hero-desktop.jpg')]`}
      >
        <div className="container py-32 h-screen ">
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
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <LinkBtn
            path={`${featuredProduct.category}/${featuredProduct.name}`}
            backgroundColor="bg-primary hover:bg-primary/90"
            color="text-secondary"
          >
            see product
          </LinkBtn>
        </div>
      </section>
      <nav>
        <div className="md:flex gap-10 justify-center container">
          <LinkItem
            mobile
            name="headphones"
            path="headphones"
            url={headphones}
          />
          <LinkItem mobile name="speakers" path="speakers" url={speaker} />
          <LinkItem mobile name="earphones" path="earphones" url={earphone} />
        </div>
      </nav>
      <HomeProducts />
    </>
  );
}

export default index;
