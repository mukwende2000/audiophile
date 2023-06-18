import MainNav from "../../../Navbar/components/MainNav";
import Logo from "../../../Logo";

function index() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <Logo />
      <MainNav />
    </div>
  );
}

export default index;
