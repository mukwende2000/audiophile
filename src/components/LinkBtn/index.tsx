import { MouseEventHandler, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  backgroundColor: string;
  color: string;
  children: ReactNode;
  width?: string;
  path?: string;
  type?: "button" | "submit" | "reset" | undefined;
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
  type,
}: Props) {
  return btn ? (
    <button
      type={type}
      onClick={handleClick}
      className={`${backgroundColor} ${color} ${width} py-3 px-7 text-[.9rem] uppercase duration-200 ${
        backgroundColor.includes("bg-transparent") ? "border" : null
      }`}
    >
      {children}
    </button>
  ) : (
    <Link
      to={path!}
      className={`${backgroundColor} ${color} ${width} py-3 px-7 text-[.9rem] uppercase duration-200 ${
        backgroundColor.includes("bg-transparent") ? "border" : null
      }`}
    >
      {children}
    </Link>
  );
}

export default LinkBtn;
