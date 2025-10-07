const ContainerDefault = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto flex w-full px-4 hero:px-0 max-w-[1240px]  ${className}`}>
      {children}
    </div>
  );
};

export default ContainerDefault;
