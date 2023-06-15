import RelatedProducts from "./components/RelatedProducts";
import ProductGallery from "./components/ProductGallery";
import ProductFeatures from "./components/ProductFeatures";
import ProductDetails from "./components/ProductDetails";
function index() {
  return (
    <div className="container">
      <ProductDetails />
      <ProductFeatures />
      <ProductGallery />
      <RelatedProducts />
    </div>
  );
}

export default index;
