const ContainerDefault = ({ children, className = "" }) => {
  return <div className={`mx-auto flex w-full  max-w-[1240px]  ${className}`}>{children}</div>;
};

export default ContainerDefault;
