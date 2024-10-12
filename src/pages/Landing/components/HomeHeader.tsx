import { useTranslation } from "react-i18next";

const HomeHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="tracking-widest">
        <div className="pt-5 md:pt-8">
          <div className="text-black font-proximaExtrabold text-[40px] leading-[50px] ">
            {t("taltechsOpenSourceTools")}
          </div>
          <div className="text-green text-[40px] leading-[50px] font-proximaExtrabold">
            {t("transparentAndAccurate")}
          </div>
          <div className="flex flex-row">
            <div className="text-black font-proximaExtrabold text-[40px] leading-[50px]">
              {t("greenhouseGasQuantification")}
            </div>
          </div>
          <div className="max-w-[370px] text-black text-[22px] font-proximaRegular mt-8">
            {t("designedForProfessionalUse")}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
