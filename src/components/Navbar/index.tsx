import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import MobileNav from "./components/MobileNav";
import MainNav from "./components/MainNav";

function index({ menuIsOpen, setMenuIsOpen }) {
  const md = useMediaQuery("(min-width: 768px)");
  useEffect(() => {
    function toggleMenu() {
      if (md) setMenuIsOpen(false);
    }
    window.addEventListener("resize", toggleMenu);
    return () => window.removeEventListener("resize", toggleMenu);
  }, [md]);

  return (
    <nav className={`md:static absolute left-0 right-0 top-12`}>
      {!md ? (
        <MobileNav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      ) : (
        <MainNav />
      )}
    </nav>
  );
}

export default index;
