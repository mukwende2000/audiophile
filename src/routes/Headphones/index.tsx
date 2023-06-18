import data from "../../data/data.json";

import ProductDetails from "../../components/ProductDetails";
import Container from "../../components/Container";
function index() {
  return (
    <Container>
      {data.map((item) => {
        if (item.category === "headphones") {
          return (
            <ProductDetails
              alt={item.name}
              description={item.description}
              desktopUrl={item.categoryImage.desktop}
              key={item.id}
              even={item.id % 2 === 0}
              isNew={item.new}
              name={item.name}
              price={item.price}
              productId={item.id}
              short={item.short}
              tabletUrl={item.categoryImage.tablet}
              url={item.categoryImage.mobile}
            />
          );
        }
      })}
    </Container>
  );
}
export default index;
