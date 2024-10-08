import { useTranslation } from "react-i18next";

const HomeHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container">
        <div className="pt-5 pl-5 md:pt-10 md:pl-10">
          <h1 className="text-black font-extrabold">
            {t("taltechsOpenSourceTools")}
          </h1>
          <h1 className="text-green">{t("transparentAndAccurate")}</h1>
          <div className="flex flex-row">
            <h1 className="text-black font-extrabold">
              {t("greenhouseGasQuantification")}
            </h1>
          </div>
          <div className="mt-2 max-w-[275px] text-black">
            {t("designedForProfessionalUse")}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
