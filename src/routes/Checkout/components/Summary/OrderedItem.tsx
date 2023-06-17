type Props = {
  url: string;
  shortName: string;
  price: number;
  quantity: number;
};

function OrderedItem({ url, shortName, price, quantity }: Props) {
  return (
    <div className="my-10 flex justify-between">
      <div className="flex items-center gap-5">
        <div className="basis-[50%]">
          <img src={url} alt="" />
        </div>
        <div className="basis-full">
          <p className="font-bold uppercase">{shortName}</p>
          <p>$ {price}</p>
        </div>
      </div>
      <p>x{quantity}</p>
    </div>
  );
}

export default OrderedItem;
