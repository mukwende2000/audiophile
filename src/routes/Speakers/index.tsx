import Container from "../../components/Container";
import ProductDetails from "../../components/ProductDetails";
import data from "../../data/data.json";

function index() {
  return (
    <Container>
      {data.map((item) => {
        if (item.category === "speakers") {
          return (
            <ProductDetails
              key={item.id}
              even={item.id % 2 === 0}
              description={item.description}
              name={item.name}
              isNew={item.new}
              short={item.short}
              url={item.categoryImage.mobile}
              tabletUrl={item.categoryImage.tablet}
              desktopUrl={item.categoryImage.desktop}
              alt={item.name}
              productId={item.id}
              price={item.price}
            />
          );
        }
      })}
    </Container>
  );
}

export default index;
