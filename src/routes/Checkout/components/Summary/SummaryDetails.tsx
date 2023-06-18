type Props = {
  property: string;
  value: string;
};

function SummaryDetails({ property, value }: Props) {
  return (
    <div className="flex justify-between mt-1 last:mt-5 uppercase">
      <p className="text-gray">{property}</p>
      <p className="font-[500] text-xl">{value}</p>
    </div>
  );
}

export default SummaryDetails;
