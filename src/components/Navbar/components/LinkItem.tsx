import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { closeMenu } from "../../../store/MenuSlice";

type Props = {
  path: string;
  name?: string;
  url?: string;
  alt?: string;
  mobile?: boolean;
};

function LinkItem({ name, path, url, alt, mobile }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <li
      className={`list-none basis-full group ${
        !mobile ? "my-4 md:my-0 " : "md:my-20"
      }`}
    >
      {mobile ? (
        <Link
          className="m-auto text-center rounded-xl grid text-dark place-content-center lg:w-[90%] bg-gray/90 md:my-0 my-20 pb-5"
          onClick={() => dispatch(closeMenu())}
          to={path}
        >
          <img className="w-48 aspect-square -mt-16" src={url} alt={alt} />
          <p className="uppercase -mt-5 text-white font-bold">{path}</p>
          <p className="flex items-center justify-center">
            <span className="uppercase text-white">shop</span>
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
          className="uppercase text-[.8rem] font-bold hover:text-primary duration-200"
          to={path}
        >
          {name}
        </NavLink>
      )}
    </li>
  );
}

export default LinkItem;
