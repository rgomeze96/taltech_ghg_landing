import { useTranslation } from "react-i18next";

import { Icons } from "@/assets/icons";

const UserGuideVideoSarv = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <>
      <div
        className="flex flex-row justify-between pt-10 hover:text-secondary hover:cursor-pointer text-black gap-x-2"
        onClick={() => {
          if (currentLanguage === "en") {
            window.open(
              "https://www.youtube.com/watch?v=fyEnGBDj-7o&ab_channel=TalTechArhitektuur"
            );
          } else if (currentLanguage === "fi") {
            window.open(
              "https://www.youtube.com/watch?v=fyEnGBDj-7o&ab_channel=TalTechArhitektuur"
            );
          } else if (currentLanguage === "et") {
            window.open(
              "https://www.youtube.com/watch?v=qxJzsa8op98&ab_channel=TalTechArhitektuur"
            );
          }
        }}
      >
        <div className="font-proximaBold text-[24px]">
          {t("userGuideVideo")}
        </div>
        <Icons.GuideVideo className="w-[41px] h-[30px] mr-10" />
      </div>
      <hr className="border-black mt-2" />
    </>
  );
};

export default UserGuideVideoSarv;
