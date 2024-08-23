const Wrapper = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-[1200px] py-9 ${className}`}>{children}</div>
  );
};

export default Wrapper;
