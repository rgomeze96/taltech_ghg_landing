import { useTranslation } from "react-i18next";

import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";

const VisitDatabaseBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="md:ml-10 w-full md:pr-10 pb-20">
        <div className="bg-pink-ehea min-h-[280px]">
          <div className="text-[40px] font-proximaRegular font-extrabold text-black pt-10 pl-10 flex flex-row items-center">
            {t("ehea")}
            <Icons.EheaBlackIcon className="h-[28px] w-[33px] ml-5" />
          </div>
          <div className="font-proximaRegular text-black text-[24px] pl-10 pt-2">
            {t("openSourceEmissionFactor")}
          </div>
          <Button
            variant="link"
            className="flex gap-x-3 ml-auto py-20 pr-10"
            type="button"
            onClick={() => window.open("https://data.ghg.ee/")}
          >
            <span className="text-black font-proximaRegular text-[26px] font-bold w-[235px]">
              {t("visitDatabaseHere")}
            </span>
            <Icons.ArrowOutward className="h-[20px] w-[20px]" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default VisitDatabaseBanner;
