import xx99 from "../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99tablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99desktop from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";

import xx992 from "../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import xx992tablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx992desktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import xx59 from "../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx59tablet from "../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59desktop from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

import ProductDetails from "../../components/ProductDetails";
function index() {
  return (
    <div className="container">
      <ProductDetails
        url={xx99}
        tabletUrl={xx99tablet}
        desktopUrl={xx99desktop}
        isNew
        alt=""
      />
      <ProductDetails
        url={xx992}
        tabletUrl={xx992tablet}
        desktopUrl={xx992desktop}
        even
        alt=""
      />
      <ProductDetails
        url={xx59}
        tabletUrl={xx59tablet}
        desktopUrl={xx59desktop}
        alt=""
      />
    </div>
  );
}

export default index;
