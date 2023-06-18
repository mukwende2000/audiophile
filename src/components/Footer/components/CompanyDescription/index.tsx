import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="md:flex justify-between items-center">
      <p className="my-7 text-gray max-w-[550px]">
        Audiophile is an all in one stop to fulfuill your audio needs. We're a
        small team of music lovers and sound specializes who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facillity-we're open 7 days a week.
      </p>
      <div className="flex justify-center my-10 gap-3">
        <Link to="">
          <FaFacebook color="white" className="text-2xl" />
        </Link>
        <Link to="">
          <FaTwitter color="white" className="text-2xl" />
        </Link>
        <Link to="">
          <FaInstagram color="white" className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}

export default index;
