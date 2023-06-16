import { useLocation } from "react-router-dom";
import Picture from "../Picture";
import Button from "../Button/Button";

type Props = {
  isNew?: boolean;
  even?: boolean;
  url: string;
  tabletUrl: string;
  desktopUrl: string;
  alt: string;
  name: string;
  description: string;
  features: string;
  // includes:
};

function index({
  even,
  isNew,
  url,
  desktopUrl,
  tabletUrl,
  alt,
  name,
  description,
  features,
}: Props) {
  const { pathname } = useLocation();
  return (
    <section className="py-16">
      <div
        className={`py-5 md:grid grid-cols-2 ${
          even ? "text-left rtl-grid" : null
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
            {name}
          </h1>
          <p className="my-10 text-gray">{description}</p>
          {pathname === "product:Id" && (
            <p className="my-5 font-bold text-xl">$ 2,999</p>
          )}
          <div>
            {pathname === "product:Id" && (
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
