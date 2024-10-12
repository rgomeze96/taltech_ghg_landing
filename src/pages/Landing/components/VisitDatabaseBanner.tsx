import { useTranslation } from "react-i18next";

import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";

const VisitDatabaseBanner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full pb-20 tracking-widest">
        <div className="bg-pink-ehea min-h-[280px] px-14 py-10 flex flex-col justify-between">
          <div className="text-[40px] font-proximaExtrabold text-black flex flex-row items-center ">
            {t("ehea")}
            <Icons.EheaBlackIcon className="h-[28px] w-[33px] ml-5" />
          </div>
          <div className="font-proximaRegular text-black text-[24px] pt-2">
            {t("openSourceEmissionFactor")}
          </div>
          <Button
            variant="link"
            className="flex gap-x-3 ml-auto mt-auto items-end"
            type="button"
            onClick={() => window.open("https://data.ghg.ee/")}
          >
            <span className="text-black text-[26px] font-proximaBold w-[235px]">
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
