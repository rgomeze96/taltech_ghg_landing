import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import HowOkasWorksChart from "@/assets/how-okas-works-chart.svg?react";

const HowOkasWorks = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className=" pt-5 pl-5 md:pt-20 md:pl-20 bg-green-okas w-full md:pr-20 min-h-[1195px]">
        <div className="text-[40px] font-proximaRegular font-extrabold text-black flex flex-col md:flex-row md:justify-between">
          {t("howOkasWorks")}
          <Button
            variant="link"
            className="mt-2 flex gap-x-3 min-h-[90px]"
            type="button"
            onClick={() =>
              (location.href = "https://ghg-tool.vercel.app/login")
            }
          >
            <span className="text-black font-proximaRegular text-[26px] font-bold w-[245px] leading-8">
              {t("startYourGreenhouse")}
            </span>
            <Icons.ArrowOutward className="h-[45px] w-[45px]" />
          </Button>
        </div>
        <div className="flex flex-row w-full justify-between mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 w-full gap-x-3">
            <div>
              <h1 className="text-black font-extrabold">01</h1>
              <h1 className="text-green">{t("profile")}</h1>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("createOrgProfile")}
              </div>
            </div>
            <div>
              <h1 className="text-black font-extrabold">02</h1>
              <h1 className="text-green">{t("form")}</h1>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("startGreenhouseGasInventory")}
              </div>
            </div>
            <div>
              <h1 className="text-black font-extrabold">03</h1>
              <h1 className="text-green">{t("results")}</h1>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("examineResultsInDetail")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 mt-32">
          <div className="grid grid-cols-1 items-center">
            <div className="font-proximaRegular text-[28px] font-bold text-black">
              {t("examineYourDetailedGHG")}
            </div>
            <div className="font-proximaRegular text-[24px] text-black">
              {t("analyseYourOrganization")}
            </div>
          </div>
          <div className="hidden md:flex">
            <HowOkasWorksChart className="w-[764px] h-[353px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowOkasWorks;
