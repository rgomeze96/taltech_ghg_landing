import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Icons } from "@/assets/icons";

const OurSupportServices = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full bg-purple-our-support min-h-[1575px]">
        <div className="text-white text-[40px] font-proximaBold ml-5 md:pt-32 md:ml-24">
          {t("ourSupportServices")}
        </div>
        <div className="flex flex-row w-full justify-between mt-20 px-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-x-6">
            <div className="my-auto flex flex-row gap-x-4">
              <Icons.Star1 className="h-[42px] w-[42px] shrink-0 transition-transform duration-200 text-white" />
              <div className="font-light text-[20px] text-white mt-5">
                {t("pleaseSendUsAnEmail")}
              </div>
            </div>
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("freeWorkshops")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("freeOnlineWorkshop")}
              </div>
            </div>
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("methodologicalSupportAndTrainings")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("customTrainingsAndExpertSupport")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between mt-24 px-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-x-6">
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("specificEmissionFactors")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("missingAnEmissionFactor")}
              </div>
            </div>
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("tailoredTechnicalTool")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("inCollaborationWithOkas")}
              </div>
            </div>
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("exclusiveToolsForYourOrganisation")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("inCollaborationWithOur")}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between mt-24 px-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-x-6">
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("greenhouseGasCalculation")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("needCostEffectiveGreenhouse")}
              </div>
            </div>
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("plugIntoTheEheaAPI")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("developingACompetingSoftware")}
              </div>
            </div>
            <div>
              <div className="text-green font-proximaBold text-[24px]">
                {t("thirdPartyCarbonFootprint")}
              </div>
              <div className="font-light text-[20px] text-white">
                {t("weHelpValidating")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-right pr-24 pt-24">
          <div className="text-green font-proximaRegular font-light text-[24px]">
            <span
              className="cursor-pointer hover:text-secondary hover:border-b hover:border-secondary"
              onClick={() => navigate("disclaimer")}
            >
              {t("disclaimer")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSupportServices;
