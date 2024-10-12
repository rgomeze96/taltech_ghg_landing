import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import HowSarvWorksChart from "@/assets/how-sarv-works-chart.svg?react";

const HowSarvWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="pb-20 pt-5 pl-5 md:pt-20 md:pl-20 md:pr-20 w-full  bg-blue-sarv">
      <div className=" min-h-[1195px] w-full max-w-[1440px] mx-auto">
        <div className="text-[40px] font-proximaExtrabold text-black flex flex-col md:flex-row md:justify-between tracking-widest gap-y-14">
          {t("howSarvWorks")}
          <Button
            variant="link"
            className="mt-2 flex gap-x-3 min-h-[90px] items-end"
            type="button"
            onClick={() => window.open("https://a-c-c-1.onrender.com/")}
          >
            <span className="text-black text-left text-[26px] font-proximaBold w-[245px] leading-8">
              {t("startYourBuildingSarv")}
            </span>
            <Icons.ArrowOutward className="h-[45px] w-[45px] items-end" />
          </Button>
        </div>
        <div className="flex flex-row w-full justify-between mt-20 tracking-widest">
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-x-6">
            <div>
              <h1 className="text-black font-proximaExtrabold">01</h1>
              <h1 className="text-green font-proximaBold">
                {t("userAccountAndProject")}
              </h1>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("createUserProfileAndProject")}
              </div>
            </div>
            <div>
              <h1 className="text-black font-proximaExtrabold">02</h1>
              <h1 className="text-green font-proximaBold">
                {t("uploadBillOfMaterials")}
              </h1>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("uploadBomFromADesign")}
              </div>
            </div>
            <div>
              <h1 className="text-black font-proximaExtrabold">03</h1>
              <h1 className="text-green font-proximaBold">{t("results")}</h1>
              <div className="font-proximaRegular text-[24px] text-black">
                {t("examineTheCarbon")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 mt-32">
          <div className="items-center">
            <div className="text-[28px] font-proximaBold text-black">
              {t("compareCarbonFootprints")}
            </div>
            <div className="font-proximaRegular text-[24px] text-black">
              {t("examineBuildingWholeLife")}
            </div>
          </div>
          <div className="hidden md:flex">
            <HowSarvWorksChart className="w-[600px] h-[353px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSarvWorks;
