import RelatedProduct from "./RelatedProduct";
import xx99 from "../../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99tablet from "../../../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99desktop from "../../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59 from "../../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx59tablet from "../../../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59desktop from "../../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9 from "../../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx9tablet from "../../../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import zx9desktop from "../../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";

function index() {
  return (
    <section>
      <div className="text-center py-10">
        <h2 className="text-2xl lg:text-4xl mb-10 lg:mb-0">
          YOU MAY ALSO LIKE
        </h2>
        <div className="md:flex justify-between gap-10">
          <RelatedProduct
            url={xx99tablet}
            tabletUrl={xx99desktop}
            desktopUrl={xx99desktop}
            productName="XX99 MARK I"
          />
          <RelatedProduct
            url={xx59tablet}
            tabletUrl={xx59}
            desktopUrl={xx59desktop}
            productName="XX59"
          />
          <RelatedProduct
            url={zx9tablet}
            tabletUrl={zx9}
            desktopUrl={zx9desktop}
            productName="ZX9 SPEAKER"
          />
        </div>
      </div>
    </section>
  );
}

export default index;
