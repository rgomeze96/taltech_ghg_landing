import { useTranslation } from "react-i18next";

import { Icons } from "@/assets/icons";

const UserGuideVideoOkas = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(currentLanguage);
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between pt-10 text-black hover:text-secondary hover:cursor-pointer"
        onClick={() => {
          currentLanguage === "en" ||
            (currentLanguage === "fi" &&
              window.open(
                "https://www.youtube.com/watch?v=YZlJhPIDm5E&ab_channel=TalTechArhitektuur"
              ));
          currentLanguage === "et" &&
            window.open(
              "https://www.youtube.com/watch?v=wciTLN18j9o&ab_channel=TalTechArhitektuur"
            );
        }}
      >
        <div className="font-proximaRegular font-bold text-[24px]">
          {t("userGuideVideo")}
        </div>
        <Icons.GuideVideo className="w-[41px] h-[30px] mr-10" />
      </div>
      <hr className="border-black mt-2" />
    </>
  );
};

export default UserGuideVideoOkas;
