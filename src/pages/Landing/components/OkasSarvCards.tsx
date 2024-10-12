import { useTranslation } from "react-i18next";

import BuildingStatesHorizontalSvg from "@/assets/building-states-horizontal.svg?react";
import BuildingStatesVerticalSvg from "@/assets/building-states-vertical.svg?react";
import { Icons } from "@/assets/icons";
import OkasIconsWithBar from "@/assets/okas-icons-with-bar.svg?react";
import { Button } from "@/components/ui/button";

import UserGuideVideoOkas from "./UserGuideVideoOkas";
import UserGuideVideoSarv from "./UserGuideVideoSarv";

const OkasSarvCards = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col md:flex-row pt-14 md:gap-x-4 pb-10 md:pl-10">
        <div className="w-full md:w-[50%] justify-center">
          <div className="overflow-hidden rounded-lg bg-green-okas shadow-md min-h-[695px]">
            <div className="px-8 py-8">
              <div className="text-[40px] font-proximaExtrabold text-black">
                {t("okas")}
              </div>
              <div className="text-[24px] font-proximaRegular text-black max-w-[360px]">
                {t("greenhouseGasAccountingTool")}
              </div>
              <div className="pt-10 hidden md:block min-h-[210px]">
                <div className="w-full px-4">
                  <OkasIconsWithBar className="h-[100px] w-full" />
                </div>
                <div className="mt-2 flex justify-between gap-x-3 text-primary">
                  <span className="text-left w-[132px] font-proximaBold text-[14px]">
                    {t("scope1")}
                  </span>
                  <span className="text-left w-[132px] font-proximaBold text-[14px]">
                    {t("scope2")}
                  </span>
                  <span className="text-left w-[132px] font-proximaBold text-[14px]">
                    {t("scope3")}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex gap-y-4 flex-col md:hidden items-center">
                <span className="text-center w-[132px] font-proximaBold text-[14px]">
                  {t("scope1")}
                </span>
                <span className="text-center w-[132px] font-proximaBold text-[14px]">
                  {t("scope2")}
                </span>
                <span className="text-center w-[132px] font-proximaBold text-[14px]">
                  {t("scope3")}
                </span>
              </div>
              <UserGuideVideoOkas />
              <div className="flex flex-col md:flex-row pt-5">
                <div className="text-secondary font-semibold font-proximaRegular text-[20px] w-[245px]">
                  {t("requestUserAccount")}
                </div>
                <Button
                  variant="link"
                  className="mt-2 flex gap-x-3"
                  type="button"
                  onClick={() =>
                    window.open("https://ghg-tool.vercel.app/login")
                  }
                >
                  <span className="text-black text-[26px] font-proximaBold w-[125px]">
                    {t("startHere")}
                  </span>
                  <Icons.ArrowOutward className="h-[20px] w-[20px]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] justify-center">
          <div className="rounded-lg bg-blue-sarv shadow-md min-h-[695px]">
            <div className="px-8 py-8">
              <div className="text-[40px] font-proximaExtrabold text-black">
                {t("sarv")}
              </div>
              <div className="text-[24px] font-proximaRegular text-black min-w-[340px]">
                {t("buildingCarbonFootprint")}
              </div>
              <div className="pt-10 min-h-[210px] hidden md:block pb-16">
                <div className="px-4">
                  <BuildingStatesHorizontalSvg className="h-[100px] w-full" />
                </div>
                <div className="pt-2 flex justify-between gap-x-3">
                  <span className="text-center w-[132px] font-proximaBold text-[14px]">
                    {t("productionStage")}
                  </span>
                  <span className="text-center w-[132px] font-proximaBold text-[14px]">
                    {t("constructionStage")}
                  </span>
                  <span className="text-center w-[132px] font-proximaBold text-[14px]">
                    {t("usageStage")}
                  </span>
                  <span className="text-center w-[132px] font-proximaBold text-[14px]">
                    {t("endOfLife")}
                  </span>
                </div>
              </div>
              <div className="pt-10 flex md:hidden pb-7">
                <div className="w-fit">
                  <BuildingStatesVerticalSvg className="h-[500px] w-[100px]" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <span>{t("productionStage")}</span>
                  <span>{t("constructionStage")}</span>
                  <span>{t("usageStage")}</span>
                  <span>{t("endOfLife")}</span>
                </div>
                <Button
                  variant="link"
                  className="mt-2 gap-x-3 hidden md:flex"
                  type="button"
                  onClick={() => window.open("https://a-c-c-1.onrender.com/")}
                >
                  <span className="text-black text-[26px] font-proximaBold w-[125px]">
                    {t("startHere")}
                  </span>
                  <Icons.ArrowOutward className="h-[20px] w-[20px]" />
                </Button>
              </div>
              <UserGuideVideoSarv />
              <Button
                variant="link"
                className="flex gap-x-3 ml-auto pt-8"
                type="button"
                onClick={() => window.open("https://a-c-c-1.onrender.com/")}
              >
                <span className="text-black text-[26px] font-proximaBold w-[125px]">
                  {t("startHere")}
                </span>
                <Icons.ArrowOutward className="h-[20px] w-[20px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OkasSarvCards;
