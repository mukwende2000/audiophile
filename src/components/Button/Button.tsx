import { useLocation } from "react-router-dom";

type Props = {
  backgroundColor: string;
  color: string;
  text?: string;
  width?: string;
};
function Button({
  backgroundColor,
  color,
  width,
  text = "see product",
}: Props) {
  const { pathname } = useLocation();
  return (
    <button
      className={`${backgroundColor} ${color} ${width} py-3 px-7 text-[.9rem] uppercase duration-200 ${
        backgroundColor.includes("bg-transparent") ? "border" : null
      }`}
    >
      {text}
    </button>
  );
}

export default Button;
