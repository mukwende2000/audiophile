import speaker from "/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "/shared/desktop/image-category-thumbnail-headphones.png";
import LinkItem from "./LinkItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Container from "../../Container";

function MobileNav() {
  const isActive = useSelector((state: RootState) => state.menu.isActive);
  return (
    <ul
      className={`overflow-hidden top-16 py-15 absolute ${
        isActive ? "h-[calc(100vh+240px)]" : "h-0"
      } right-1 left-1 bg-secondary duration-500`}
    >
      <Container>
        <LinkItem
          alt="A pair of headphones"
          path="headphones"
          url={headphones}
          mobile
        />
        <LinkItem alt="Audio speakers" path="speakers" url={speaker} mobile />
        <LinkItem alt="Earphones" path="earphones" url={earphone} mobile />
      </Container>
    </ul>
  );
}

export default MobileNav;
