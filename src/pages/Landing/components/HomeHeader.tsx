import { useTranslation } from "react-i18next";

const HomeHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="pt-5 pl-5 md:pt-10 md:pl-10">
          <div className="text-black font-bold text-[40px]">
            {t("taltechsOpenSourceTools")}
          </div>
          <div className="text-green text-[40px] font-bold">
            {t("transparentAndAccurate")}
          </div>
          <div className="flex flex-row">
            <div className="text-black font-bold text-[40px]">
              {t("greenhouseGasQuantification")}
            </div>
          </div>
          <div className="mt-2 max-w-[275px] text-black text-[22px]">
            {t("designedForProfessionalUse")}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
