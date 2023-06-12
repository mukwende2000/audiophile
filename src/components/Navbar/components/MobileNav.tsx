import speaker from "../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import LinkItem from "./LinkItem";

function MobileNav({ menuIsOpen }) {
  return (
    <ul
      className={`overflow-hidden top-16 py-15 absolute ${
        menuIsOpen ? "h-[calc(100vh+100px)]" : "h-0"
      } right-1 left-1 bg-secondary duration-500`}
    >
      <LinkItem
        alt="A pair of headphones"
        path="headphones"
        name="Headphones"
        url={headphones}
        mobile
      />
      <LinkItem
        alt="Audio speakers"
        path="speakers"
        name="Speakers"
        url={speaker}
        mobile
      />
      <LinkItem
        alt="Earphones"
        path="earphones"
        name="Earphones"
        url={earphone}
        mobile
      />
    </ul>
  );
}

export default MobileNav;
