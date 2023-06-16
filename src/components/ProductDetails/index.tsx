import { useLocation } from "react-router-dom";
import xx99 from "../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import Picture from "../Picture";
import Button from "../Button/Button";

type Props = {
  isNew?: boolean;
  even?: boolean;
  url: string;
  tabletUrl: string;
  desktopUrl: string;
  alt: string;
};

function index({ even, isNew, url, desktopUrl, tabletUrl, alt }: Props) {
  const { pathname } = useLocation();
  return (
    <section className="py-16">
      <button hidden className="mb-10">
        Go back
      </button>
      <div
        className={`py-5 grid-cols-2 ${
          even ? "grid text-left rtl-grid" : "md:grid"
        } gap-28`}
      >
        <Picture
          url={url}
          tabletUrl={tabletUrl}
          desktopUrl={desktopUrl}
          alt={alt}
        />
        <article>
          {isNew && (
            <div className="uppercase text-primary tracking-[.6rem] mt-8">
              new product
            </div>
          )}
          <h1
            className={`my-6 text-3xl md:text-4xl font-bold ${
              even ? null : "w-6/12"
            } max-w-3xl`}
          >
            XX99 Mark II Headphones
          </h1>
          <p className="my-10 text-gray">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphones experience by reproducing the
            balanced depth and precision of quality sound.
          </p>
          {pathname === "checkout" && (
            <p className="my-5 font-bold text-xl">$ 2,999</p>
          )}
          <div>
            {pathname === "checkout" && (
              <div className="bg-gray/30 mr-3 inline-flex">
                <button className="py-2 px-4 hover:text-primary">+</button>
                <span className="p-2">1</span>
                <button className="py-2 px-4 hover:text-primary">-</button>
              </div>
            )}
            <Button backgroundColor="bg-primary" color="text-secondary" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default index;
