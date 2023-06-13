import { ReactNode } from "react";

type Props = {
  backgroundColor: string;
  color: string;
};
function Button({ backgroundColor, color }: Props) {
  return (
    <button
      className={`${backgroundColor} ${color} py-3 px-7 text-[.9rem] uppercase duration-200 ${
        backgroundColor.includes("bg-transparent") ? "border" : null
      }`}
    >
      see product
    </button>
  );
}

export default Button;
