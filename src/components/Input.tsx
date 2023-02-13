import React, {useId} from "react";

interface InputProps {
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isInteger?: boolean;
  labelText: string;
}
function Input({type, value, onChange, isInteger = false, labelText}: InputProps) {
  const id = useId();
  return (
    <>
      <label className="float-left mt-5" htmlFor={id}>{labelText}</label>
      <input
        min={type === "number" ? 0 : undefined}
        inputMode={isInteger ? "numeric" : undefined}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={(event) => {
          if (isInteger && /[,.-]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        className="border rounded w-full py-2 px-3 my-2 text-gray-700"
      />
    </>
  );
}

export default Input;