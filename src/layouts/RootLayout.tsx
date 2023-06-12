import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About/About";

function RootLayout() {
  return (
    <div>
      <Header />
      {/* {cart.open && <Backdrop onBackdropClick={handleBackdropClick} />} */}
      <main className="text-4xl">
        <Outlet />
      </main>
      <About />
      <Footer />
    </div>
  );
}

export default RootLayout;
