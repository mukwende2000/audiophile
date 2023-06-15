type Props = {
  name: string;
  quantity: string;
};

function ProductFeature({ quantity, name }: Props) {
  return (
    <li className="mb-2 w-full">
      <span className="text-primary font-bold mr-4">{quantity}</span>
      <span className="text-gray">{name}</span>
    </li>
  );
}

export default ProductFeature;
