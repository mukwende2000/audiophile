import { useEffect, useState } from "react";
import MobileNav from "./components/MobileNav";
import MainNav from "./components/MainNav";

function index({ menuIsOpen, setMenuIsOpen }) {
  const [isAbove768Px, setIsAbove768Px] = useState<boolean>(innerWidth > 768);

  useEffect(() => {
    function toggleMenu(): void {
      setIsAbove768Px(innerWidth > 768 ? true : false);
      if (isAbove768Px) setMenuIsOpen(false);
    }
    window.addEventListener("resize", toggleMenu);
    return () => window.removeEventListener("resize", toggleMenu);
  }, [isAbove768Px]);

  return (
    <nav className={`md:static absolute left-0 right-0 top-12`}>
      {isAbove768Px ? (
        <MainNav />
      ) : (
        <MobileNav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      )}
    </nav>
  );
}

export default index;
