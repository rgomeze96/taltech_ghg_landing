import { useTranslation } from "react-i18next";

const Disclaimer = () => {
  const { t } = useTranslation();
  return (
    <div className="container max-w-[1024px] text-center">
      <div className="font-proximaBold text-[40px] text-secondary">
        {t("disclaimer")}
      </div>
      <div className="mt-5 text-[24px] font-proximaRegular">
        {t("disclaimerText")}
      </div>
    </div>
  );
};

export default Disclaimer;
