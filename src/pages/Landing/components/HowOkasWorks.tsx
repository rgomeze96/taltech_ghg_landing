import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import HowOkasWorksChart from "@/assets/how-okas-works-chart.svg?react";

const HowOkasWorks = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="pb-20 pt-5 pl-5 md:pt-20 md:pl-20 bg-green-okas w-full md:pr-20 min-h-[1195px]">
        <div className="text-[40px] font-proximaExtrabold text-black flex flex-col md:flex-row md:justify-between">
          {t("howOkasWorks")}
          <Button
            variant="link"
            className="mt-2 flex gap-x-3 min-h-[90px] text-left"
            type="button"
            onClick={() => window.open("https://ghg-tool.vercel.app/login")}
          >
            <span className="text-black  text-[26px] font-proximaBold w-[305px] leading-8">
              {t("startYourGreenhouse")}
            </span>
            <Icons.ArrowOutward className="h-[45px] w-[45px]" />
          </Button>
        </div>
        <div className="flex flex-row w-full justify-between mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 w-full gap-x-3">
            <div className="tracking-widest">
              <div className="text-black font-proximaExtrabold text-[35px]">
                01
              </div>
              <div className="text-green font-proximaBold text-[35px]">{t("profile")}</div>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("createOrgProfile")}
              </div>
            </div>
            <div className="tracking-widest">
              <div className="text-black font-proximaExtrabold text-[35px]">
                02
              </div>
              <div className="text-green font-proximaBold text-[35px]">
                {t("activityData")}
              </div>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("startGreenhouseGasInventory")}
              </div>
            </div>
            <div className="tracking-widest">
              <div className="text-black font-proximaExtrabold text-[35px]">
                03
              </div>
              <div className="text-green font-proximaBold text-[35px]">{t("results")}</div>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("examineResultsInDetail")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 mt-32">
          <div className="items-center">
            <div className="text-[28px] font-proximaBold text-black">
              {t("examineYourDetailedGHG")}
            </div>
            <div className="font-proximaRegular text-[24px] text-black">
              {t("analyseYourOrganization")}
            </div>
          </div>
          <div className="hidden md:flex">
            <HowOkasWorksChart className="w-[600px] h-[353px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HowOkasWorks;
