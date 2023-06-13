type Props = {
  backgroundColor: string;
  color: string;
  text: string
};
function Button({ backgroundColor, color, text='see product' }: Props) {
  return (
    <button
      className={`${backgroundColor} ${color} py-3 px-7 text-[.9rem] uppercase duration-200 ${
        backgroundColor.includes("bg-transparent") ? "border" : null
      }`}
    >
     { text }
    </button>
  );
}

export default Button;
