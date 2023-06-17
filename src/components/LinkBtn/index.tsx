import { MouseEventHandler, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  backgroundColor: string;
  color: string;
  children: ReactNode;
  width?: string;
  path?: string;
  btn?: boolean;
  handleClick?: MouseEventHandler;
};

function LinkBtn({
  btn,
  path,
  backgroundColor,
  color,
  width,
  children,
  handleClick,
}: Props) {
  const { pathname } = useLocation();
  return btn ? (
    <button
      onClick={handleClick}
      className={`${backgroundColor} ${color} ${width} py-3 px-7 text-[.9rem] uppercase duration-200 ${
        backgroundColor.includes("bg-transparent") ? "border" : null
      }`}
    >
      {children}
    </button>
  ) : (
    <Link
      to={path}
      className={`${backgroundColor} ${color} ${width} py-3 px-7 text-[.9rem] uppercase duration-200 ${
        backgroundColor.includes("bg-transparent") ? "border" : null
      }`}
    >
      {children}
    </Link>
  );
}

export default LinkBtn;
