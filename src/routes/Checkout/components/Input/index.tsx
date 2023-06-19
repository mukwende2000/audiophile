type Props = {
  name: string;
  type: string;
  placeholder: string;
  id: string;
  position?: string;
  required?: boolean;
};

function Input({
  required = true,
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
        required={required}
      />
    </div>
  );
}

export default Input;
