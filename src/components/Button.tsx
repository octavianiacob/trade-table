import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

function Button({ onClick, className, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-md px-5 py-2
       text-xl font-medium border border-gray-300 bg-white text-gray-700
       shadow-sm hover:bg-gray-50 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
