import Navigation from "./components/Navigation";
import Container from "../Container";
import CompanyDescription from "./components/CompanyDescription";

function index() {
  return (
    <footer className="text-center md:text-left bg-dark/90 py-10 relative before:content-[''] before:absolute before:top-0 md:before:left-[15%] before:left-[50%] before:translate-x-[-50%] before:bg-primary before:w-[100px] before:h-1">
      <Container>
        <Navigation />
        <CompanyDescription />
        <p className="text-gray">Copyright 2023.All Rights Reserved</p>
      </Container>
    </footer>
  );
}
export default index;
