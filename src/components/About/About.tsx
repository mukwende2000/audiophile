import illustrationMobile from "/shared/mobile/image-best-gear-mobile.jpg";
import illustrationTablet from "/shared/tablet/image-best-gear-tablet.jpg";
import illustrationDesktop from "/shared/desktop/image-best-gear-desktop.jpg";
import Picture from "../Picture";

function About() {
  return (
    <section>
      <div className="container my-10 lg:flex flex-row-reverse gap-60 ">
        {/* <Picture
          url={illustrationMobile}
          tabletUrl={illustrationTablet}
          desktopUrl={illustrationDesktop}
          alt="A man listening to music on headphones"
        /> */}

        <picture className="basis-full">
          <source
            media="(min-width: 768px and max-width: 1020px)"
            srcSet={illustrationTablet}
          />
          <source media="(min-width: 1020px)" srcSet={illustrationDesktop} />
          <img src={illustrationMobile} alt="" />
        </picture>
        <article className="lg:text-left text-center lg:w-8/12 lg:ml-auto">
          <h2 className="uppercase text-3xl my-10">
            bringing you the <span className="text-primary">best</span> audio
            gear
          </h2>
          <p className="text-gray">
            Located at the heart of New York City, Audiophile is the primier
            store for high end headphones, earphones, speakers and audio
            accessories. we have large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make audiophile the best place to buy your portable audio equipment.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
