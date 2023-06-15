type Props = {
  value: string;
  defaultChecked?: boolean;
};

function Radio({ value, defaultChecked }: Props) {
  return (
    <label className="lg:border border-gray my-1 p-4 rounded" htmlFor={value}>
      <input
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
