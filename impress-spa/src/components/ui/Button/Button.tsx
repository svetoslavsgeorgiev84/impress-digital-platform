type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button
      className="
         rounded-xl
        bg-blue-700
        px-7
        py-4
        text-base
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-blue-800
        hover:scale-105
        md:px-6
        md:py-3
        md:text-lg
      "
    >
      {children}
    </button>
  );
}

export default Button;