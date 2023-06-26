import { formatPrice } from "../../../../utils/formatPrice";

type Props = {
  url: string;
  shortName: string;
  price: number;
  quantity: number;
  alt: string;
};

function OrderedItem({ alt, url, shortName, price, quantity }: Props) {
  return (
    <div className="my-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <div className="basis-[50%]">
          <img src={url} alt={alt} />
        </div>
        <div className="basis-full">
          <p className="font-bold uppercase">{shortName}</p>
          <p>${formatPrice(price)}</p>
        </div>
      </div>
      <p>x{quantity}</p>
    </div>
  );
}

export default OrderedItem;
