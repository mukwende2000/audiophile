import { useEffect, useState } from "react";
import MobileNav from "./components/MobileNav";
import MainNav from "./components/MainNav";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { closeMenu } from "../../store/MenuSlice";

function index() {
  const [isAbove768Px, setIsAbove768Px] = useState<boolean>(innerWidth > 768);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    function toggleMenu(): void {
      setIsAbove768Px(innerWidth > 768 ? true : false);
      if (isAbove768Px) dispatch(closeMenu());
    }
    window.addEventListener("resize", toggleMenu);
    return () => window.removeEventListener("resize", toggleMenu);
  }, [isAbove768Px]);

  return (
    <nav className={`md:static absolute left-0 right-0 top-12`}>
      {isAbove768Px ? <MainNav /> : <MobileNav />}
    </nav>
  );
}

export default index;
