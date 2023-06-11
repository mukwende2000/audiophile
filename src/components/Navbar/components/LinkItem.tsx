import { Link, useLocation } from "react-router-dom";
import useMediaQuery from "../../../hooks/useMediaQuery";

type Props = {
  path: string;
  name: string;
  url?: string;
  alt?: string;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function LinkItem({ name, path, url, alt, setMenuIsOpen }: Props) {
  const { pathname } = useLocation();
  const md = useMediaQuery("(min-width: 768px)");
  return (
    <li className="group">
      {md ? (
        <Link
          className="uppercase font-bold hover:text-primary duration-200"
          to={path}
        >
          {name}
        </Link>
      ) : (
        <Link
          className="m-auto text-center rounded-xl grid text-dark place-content-center w-[70%] bg-gray/10 my-20 py-5"
          onClick={() => setMenuIsOpen(false)}
          to={path}
        >
          <img className="w-40 rounded-full -mt-16" src={url} alt={alt} />
          <p className="uppercase font-bold">{name}</p>
          <p className="flex items-center justify-center">
            <span className="uppercase">shop</span>
            <span className="text-primary text-2xl ml-2 inline-block rotate-90 group-hover:translate-x-1 duration-200">
              ^
            </span>
          </p>
        </Link>
      )}
    </li>
  );
}

export default LinkItem;
