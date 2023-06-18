import CartHeader from "./components/CartHeader";
import CartContents from "./components/CartContents";
import CartFooter from "./components/CartFooter";

function index() {
  return (
    <div
      className={`absolute top-48 md:left-[73%] left-[50%] translate-x-[-50%] z-[100] w-10/12 max-w-[25rem] p-7 rounded-lg bg-secondary shadow-xl`}
    >
      <CartHeader />
      <CartContents />
      <CartFooter />
    </div>
  );
}

export default index;
