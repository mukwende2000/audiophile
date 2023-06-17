import RelatedProducts from "./components/RelatedProducts";
import ProductGallery from "./components/ProductGallery";
import ProductFeatures from "./components/ProductFeatures";
import ProductDetails from "../../components/ProductDetails";
import { useLoaderData } from "react-router-dom";
import data from "../../data/data.json";
import { Product } from "../../utils/ProductType";

function index() {
  const product = useLoaderData() as Product;
  console.log(product);
  return (
    <div className="container">
      <ProductDetails
        productId={product.id}
        isNew={product.new}
        description={product.description}
        name={product.name}
        price={product.price}
        url={product.categoryImage.mobile}
        tabletUrl={product.categoryImage.tablet}
        desktopUrl={product.categoryImage.desktop}
        alt=""
      />
      <ProductFeatures
        accessories={product.includes}
        features={product.features}
      />
      <ProductGallery />
      <RelatedProducts others={product.others} />
    </div>
  );
}

export async function loader({
  params,
}: {
  params: { productId: string };
}): Promise<Product | undefined> {
  const product = data.find((item) => item.name === params.productId);

  return product;
}

export default index;
