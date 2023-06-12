import LinkItem from "./LinkItem";

function MainNav() {
  return (
    <ul className="flex gap-7">
      <LinkItem path="/" name="Home" />
      <LinkItem path="headphones" name="Headphones" />
      <LinkItem path="speakers" name="Speakers" />
      <LinkItem path="earphones" name="Earphones" />
    </ul>
  );
}

export default MainNav;
