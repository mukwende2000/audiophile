import Button from "../../components/Button/Button";
import LinkItem from "../../components/Navbar/components/LinkItem";
import HomeProducts from "./components/HomeProducts";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import { useState } from "react";

function index() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <section
        className={`text-center md:text-left bg-bottom bg-cover bg-no-repeat bg-[url('hero-tablet.jpg')] md:bg-[url('hero-desktop.jpg')]`}
      >
        <div className="container py-32 h-screen ">
          <div
            className="uppercase tracking-[.7rem] text-gray"
            aria-label="New Product"
          >
            New Product
          </div>
          <h1 className="font-bold max-w-md uppercase my-5 text-secondary text-4xl lg:text-6xl">
            xx99 mark II headphones
          </h1>
          <p className="max-w-md text-gray my-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            backgroundColor="bg-primary hover:bg-primary/90"
            color="text-secondary"
          />
        </div>
      </section>
      <nav>
        <div className="md:flex gap-10 justify-center container">
          <LinkItem
            setMenuIsOpen={setMenuIsOpen}
            mobile
            name="headphones"
            path="headphones"
            url={headphones}
          />
          <LinkItem
            mobile
            setMenuIsOpen={setMenuIsOpen}
            name="speakers"
            path="speakers"
            url={speaker}
          />
          <LinkItem
            setMenuIsOpen={setMenuIsOpen}
            mobile
            name="earphones"
            path="earphones"
            url={earphone}
          />
        </div>
      </nav>
      <HomeProducts />
    </>
  );
}

export default index;
