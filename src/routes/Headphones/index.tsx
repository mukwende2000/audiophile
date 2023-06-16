import data from "../../data/data.json";

import ProductDetails from "../../components/ProductDetails";
function index() {
  return (
    <div className="container">
      {/* <ProductDetails
        url={xx99}
        tabletUrl={xx99tablet}
        desktopUrl={xx99desktop}
        isNew
        alt=""
      />
      <ProductDetails
        url={xx992}
        tabletUrl={xx992tablet}
        desktopUrl={xx992desktop}
        even
        alt=""
      />
      <ProductDetails
        url={xx59}
        tabletUrl={xx59tablet}
        desktopUrl={xx59desktop}
        alt=""
      /> */}
      {data.map((item) => {
        if (item.category === "headphones") {
          return (
            <ProductDetails
              key={item.id}
              even={item.id % 2 === 0}
              description={item.description}
              name={item.name}
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
