const ContainerDefault = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto flex w-full max-w-[1224px] 3xl:max-w-[1704px] ${className}`}>
      {children}
    </div>
  );
};

export default ContainerDefault;
