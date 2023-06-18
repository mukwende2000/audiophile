import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  styles?: string;
};
function index({ children, styles }: Props) {
  return (
    <div className={`mx-auto w-11/12 lg:w-8/12 ${styles}`}>{children}</div>
  );
}

export default index;
