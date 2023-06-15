import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About/About";
import LinkItem from "../components/Navbar/components/LinkItem";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";

function RootLayout() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <Header />

      {/* {cart.open && <Backdrop onBackdropClick={handleBackdropClick} />} */}
      <main>
        <Outlet />
      </main>
      {pathname === "/" ? null : pathname !== "checkout" ? null : (
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
      )}
      {pathname === "checkout" ? null : <About />}
      <Footer />
    </div>
  );
}

export default RootLayout;
