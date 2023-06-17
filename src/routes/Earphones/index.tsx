import ProductDetails from "../../components/ProductDetails";
import data from "../../data/data.json";

function index() {
  return (
    <div className="container">
      {data.map((item) => {
        if (item.category === "earphones") {
          return (
            <ProductDetails
              key={item.id}
              productId={item.id}
              even={item.id % 2 === 0}
              description={item.description}
              name={item.name}
              short={item.short}
              isNew={item.new}
              url={item.categoryImage.mobile}
              tabletUrl={item.categoryImage.tablet}
              desktopUrl={item.categoryImage.desktop}
              alt={item.name}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default index;
