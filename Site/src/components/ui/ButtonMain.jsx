function ButtonMain({ children, className = '', ...props }) {
  return (
    <>
      <button
        className={`rounded font-medium border-2 px-6 py-1 text-main lg:hover:scale-100 hover:scale-105 cursor-pointer transition-all duration-400 ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default ButtonMain;
