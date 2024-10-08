import { useTranslation } from "react-i18next";
import GuideVideo from "@/assets/guide-video.svg?react";

const UserGuideVideo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between pt-10">
        <div className="text-black font-proximaRegular font-bold text-[24px]">
          {t("userGuideVideo")}
        </div>
        <GuideVideo className="w-[41px] h-[30px] mr-10" />
      </div>
      <hr className="border-black mt-2" />
    </>
  );
};

export default UserGuideVideo;
