import illustrationMobile from "/shared/mobile/image-best-gear-mobile.jpg";
import illustrationTablet from "/shared/tablet/image-best-gear-tablet.jpg";
import illustrationDesktop from "/shared/desktop/image-best-gear-desktop.jpg";
import Container from "../Container";
import Picture from "../Picture";
import AboutArticle from "./components/AboutArticle";

function index() {
  return (
    <section>
      <Container styles="my-10 lg:flex flex-row-reverse gap-40 ">
        <Picture
          otherStyles="basis-full"
          url={illustrationMobile}
          desktopUrl={illustrationDesktop}
          tabletUrl={illustrationTablet}
          alt="Man listening to music"
        />
        <AboutArticle />
      </Container>
    </section>
  );
}

export default index;
