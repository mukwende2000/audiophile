import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div>
      <Header />
      <main className="text-4xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
