import data from "../../data/data.json";

import ProductDetails from "../../components/ProductDetails";
function index() {
  return (
    <div className="container">
      {data.map((item) => {
        if (item.category === "headphones") {
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
{
  /* <ProductDetails
              key={item.id}
              productId={item.id}
              even={item.id % 2 === 0}
              description={item.description}
              name={item.name}
              isNew={item.new}
              short={item.short}
              url={item.categoryImage.mobile}
              tabletUrl={item.categoryImage.tablet}
              desktopUrl={item.categoryImage.desktop}
              alt={item.name}
            /> */
}
export default index;
