type Props = {
  value: string;
  defaultChecked?: boolean;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
};

function Radio({ value, defaultChecked, setPaymentMethod }: Props) {
  return (
    <label
      className="cursor-pointer lg:border border-gray my-1 p-4 rounded"
      htmlFor={value}
    >
      <input
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="mr-3"
        type="radio"
        id={value}
        value={value}
        name="method"
        defaultChecked={defaultChecked}
      />
      {value}
    </label>
  );
}

export default Radio;
