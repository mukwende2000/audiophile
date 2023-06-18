import RelatedProducts from "./components/RelatedProducts";
import ProductGallery from "./components/ProductGallery";
import ProductFeatures from "./components/ProductFeatures";
import ProductDetails from "../../components/ProductDetails";
import { LoaderFunction, useLoaderData } from "react-router-dom";
import data from "../../data/data.json";
import { Product } from "../../utils/ProductType";
import Container from "../../components/Container";

function index() {
  const product = useLoaderData() as Product;
  return (
    <Container>
      <ProductDetails
        short={product.short}
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
      <ProductGallery
        productImg={product.gallery.first.mobile}
        productImg2={product.gallery.second.mobile}
        productImg3={product.gallery.third.mobile}
        productImgTablet={product.gallery.first.tablet}
        productImg2Tablet={product.gallery.second.tablet}
        productImg2Desktop={product.gallery.third.tablet}
        productImgDesktop={product.gallery.first.desktop}
        productImg3Tablet={product.gallery.second.desktop}
        productImg3Desktop={product.gallery.third.desktop}
      />
      <RelatedProducts others={product.others} />
    </Container>
  );
}

export function loader({
  params,
}: {
  params: { productId: string };
}): Product | undefined {
  const product = data.find((item) => item.name === params.productId);

  return product;
}

export default index;
