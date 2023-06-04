import { Link } from "react-router-dom";

function LinkItem({ name, path }: { path: string; name: string }) {
  return (
    <li className="mx-5">
      <Link to={path}>{name}</Link>
    </li>
  );
}

export default LinkItem;
