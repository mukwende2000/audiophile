import Container from "../../components/Container";
import ProductDetails from "../../components/ProductDetails";
import data from "../../data/data.json";

function index() {
  return (
    <Container>
      {data.map((item) => {
        if (item.category === "earphones") {
          return (
            <ProductDetails
              alt={item.name}
              description={item.description}
              desktopUrl={item.categoryImage.desktop}
              even={item.id % 2 === 0}
              isNew={item.new}
              key={item.id}
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
