import yx1Desktop from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1Tablet from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1Mobile from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import ProductDetails from "../../components/ProductDetails";

function index() {
  return (
    <div className="container">
      <ProductDetails
        isNew
        even
        desktopUrl={yx1Desktop}
        tabletUrl={yx1Tablet}
        url={yx1Mobile}
        alt=""
      />
    </div>
  );
}

export default index;
