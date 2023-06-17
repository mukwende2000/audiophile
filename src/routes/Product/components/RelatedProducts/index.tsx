import { Other } from "../../../../utils/ProductType";
import RelatedProduct from "./RelatedProduct";

function index({ others }: { others: Other[] }) {
  return (
    <section>
      <div className="text-center py-10">
        <h2 className="text-2xl lg:text-4xl mb-10 lg:mb-0">
          YOU MAY ALSO LIKE
        </h2>
        <div className="md:flex justify-between gap-10">
          {others.map((other) => {
            return (
              <RelatedProduct
                slug={other.slug}
                url={other.image.mobile}
                tabletUrl={other.image.tablet}
                desktopUrl={other.image.desktop}
                productName={other.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default index;
