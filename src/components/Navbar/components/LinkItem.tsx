import { NavLink, Link } from "react-router-dom";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { closeMenu } from "../../../store/MenuSlice";

type Props = {
  path: string;
  name: string;
  url?: string;
  alt?: string;
  mobile?: boolean;
};

function LinkItem({ name, path, url, alt, mobile }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const md = useMediaQuery("(min-width: 768px)");
  return (
    <li
      className={`list-none basis-full group ${
        !mobile ? "my-4 md:my-0 " : null
      }`}
    >
      {mobile ? (
        <Link
          className="m-auto text-center rounded-xl grid text-dark place-content-center lg:w-[90%] bg-gray/10 my-32 pb-5"
          onClick={() => dispatch(closeMenu())}
          to={path}
        >
          <img className="w-48 -mt-16" src={url} alt={alt} />
          <p className="uppercase -mt-5 font-bold">{name}</p>
          <p className="flex items-center justify-center">
            <span className="uppercase">shop</span>
            <span
              role="presentation"
              className="text-primary text-2xl ml-2 inline-block rotate-90 group-hover:translate-x-1 duration-200"
            >
              ^
            </span>
          </p>
        </Link>
      ) : (
        <NavLink
          className="uppercase font-bold hover:text-primary duration-200"
          to={path}
        >
          {name}
        </NavLink>
      )}
    </li>
  );
}

export default LinkItem;
