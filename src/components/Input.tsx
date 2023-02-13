import React, {useId} from "react";

interface InputProps {
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}
function Input({type, value, onChange, labelText}: InputProps) {
  const id = useId();
  return (
    <>
      <label className="float-left mt-5" htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="border rounded w-full py-2 px-3 my-2 text-gray-700"
      />
    </>
  );
}

export default Input;