import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../../../../store/MenuSlice";
import { FaBars } from "react-icons/fa";
import { RootState } from "../../../../store/store";

function index() {
  const isActive = useSelector((state: RootState) => state.menu.isActive);
  const dispatch = useDispatch();
  function handleClick() {
    if (isActive) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  }
  return (
    <button onClick={handleClick} className="cursor-pointer text-xl md:hidden">
      <FaBars />
    </button>
  );
}

export default index;
