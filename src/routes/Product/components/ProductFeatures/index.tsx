import { Accessories } from "../../../../utils/ProductType";
import ProductFeature from "./ProductFeature";

type Props = {
  features: string;
  accessories: Accessories[];
};

function index({ features, accessories }: Props) {
  return (
    <div className="my-10 lg:flex gap-60 item">
      <article className="my-16 lg:my-0 basis-full">
        <h2 className="text-xl lg:text-3xl font-bold mb-2">FEATURES</h2>
        <p className="text-gray">{features}</p>
      </article>
      <div className="md:flex lg:block justify-between basis-full">
        <h2 className="font-bold text-xl md:text-3xl mb-2">IN THE BOX</h2>
        <ul className="md:mr-60">
          {accessories.map((accessory) => {
            return (
              <ProductFeature
                name={accessory.item}
                quantity={`${accessory.quantity}x`}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default index;
