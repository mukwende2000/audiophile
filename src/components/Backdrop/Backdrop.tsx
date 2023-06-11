import { MouseEventHandler } from "react";

function Backdrop({ onBackdropClick }: { onBackdropClick: MouseEventHandler }) {
  return (
    <div
      onClick={onBackdropClick}
      className="cursor-pointer fixed right-0 top-0 left-0 bottom-0 bg-dark/40"
      role="presentation"
      aria-hidden
    />
  );
}

export default Backdrop;
