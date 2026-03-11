import ContainerDefault from "./ContainerDefault";

const SectionHeader = ({ title, subtitle, action, className = "" }) => {
  return (
    <div className="border-horizontal">
      <ContainerDefault className="border-vertical ">
        <div
          className={`flex flex-col md:flex-row justify-between w-full items-start md:items-center md:px-10 px-6 py-6 md:py-10  ${className}`}
        >
          <div className="max-w-[50%]">
            <h2 className="title-section">{title}</h2>
            {subtitle && <p className="subtitle-section ">{subtitle}</p>}
          </div>
          <div className="mt-4 md:mt-0">{action && action}</div>
        </div>
      </ContainerDefault>
    </div>
  );
};

export default SectionHeader;
