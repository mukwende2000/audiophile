type Props = {
  property: string;
  value: number;
};

function SummaryDetails({ property, value }: Props) {
  return (
    <div className="flex justify-between mt-1 last:mt-5 uppercase">
      <p className="text-gray">{property}</p>
      <p className="font-bold text-xl">{value}</p>
    </div>
  );
}

export default SummaryDetails;
