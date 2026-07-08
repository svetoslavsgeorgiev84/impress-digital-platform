type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        rounded-xl
        bg-blue-700
        px-6
        py-3
        font-medium
        text-white
        transition-all
        duration-200
        hover:bg-blue-800
        hover:scale-105
      "
    >
      {children}
    </button>
  );
}

export default Button;