import zx9 from "../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import zx9tablet from "../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9destop from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7 from "../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import zx7tablet from "../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7desktop from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import ProductDetails from "../../components/ProductDetails";
function index() {
  return (
    <div className="container">
      <ProductDetails
        isNew
        url={zx9}
        tabletUrl={zx9tablet}
        desktopUrl={zx9destop}
        alt=""
      />
      <ProductDetails
        even
        url={zx7}
        tabletUrl={zx7tablet}
        desktopUrl={zx7desktop}
        alt=""
      />
    </div>
  );
}

export default index;
