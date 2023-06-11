import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div>
      <Header />
      {/* {cart.open && <Backdrop onBackdropClick={handleBackdropClick} />} */}
      <main className="text-4xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
