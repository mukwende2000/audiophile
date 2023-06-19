type Props = {
  name: string;
  type: string;
  placeholder: string;
  id: string;
  position?: string;
  required?: boolean;
  pattern?: string;
};

function Input({
  required = true,
  pattern,
  name,
  type,
  placeholder,
  id,
  position,
}: Props) {
  return (
    <div className={`${position} mb-6 lg:mb-0 flex flex-col`}>
      <label className="font-bold text-sm mb-2" htmlFor={name}>
        {name}
      </label>
      <input
        className="border border-gray rounded p-3 focus:outline-primary"
        type={type}
        placeholder={placeholder}
        id={id}
        pattern={pattern}
        required={required}
      />
      {/* <p>{errors.name?.message}</p> */}
    </div>
  );
}

export default Input;
