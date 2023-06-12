import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/shared/desktop/logo.svg";
import MainNav from "../Navbar/components/MainNav";
import { Link } from "react-router-dom";
function index() {
  return (
    <footer className="bg-dark/90 py-10 relative before:content-[''] before:absolute before:top-0 md:before:left-[15%] before:left-[50%] before:translate-x-[-50%] before:bg-primary before:w-[100px] before:h-1">
      <div className="container text-center md:text-left">
        <div className="md:flex justify-between">
          <div className="grid place-items-center">
            <img className="my-6" src={logo} alt="Audiophile logo" />
          </div>
          <MainNav />
        </div>
        <div className="md:flex justify-between items-center">
          <p className="my-7 text-gray max-w-[550px]">
            Audiophile is an all in one stop to fulfuill your audio needs. We're
            a small team of music lovers and sound specializes who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facillity-we're open 7 days a week.
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
        <p className="text-gray">Copyright 2023.All Rights Reserved</p>
      </div>
    </footer>
  );
}
export default index;
