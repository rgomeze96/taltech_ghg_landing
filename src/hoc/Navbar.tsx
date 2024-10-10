/// <reference types="vite-plugin-svgr/client" />
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Icons } from "../assets/icons";
import HeaderLanguageSelector from "../components/HeaderLanguageSelector";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="top-0 z-40 mb-10 w-full bg-primary drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="ml-0 mr-0 flex h-10 items-center bg-primary-foreground">
        <div className="relative flex h-full min-w-[180px] items-center justify-center bg-green-okas">
          <h5
            className="font-bold text-primary-foreground px-5 hover:cursor-pointer"
            onClick={() => window.open("https://ghg-tool.vercel.app/login")}
          >
            {t("okas")}
          </h5>
          <div className="absolute top-full">
            <Icons.NotchDown className="h-[7px] w-[16px] text-green" />
          </div>
        </div>
        <div className="relative hidden sm:flex h-full min-w-[180px] items-center justify-center bg-blue-sarv">
          <h5
            className="font-bold text-primary-foreground px-5 hover:cursor-pointer"
            onClick={() => window.open("https://a-c-c-1.onrender.com")}
          >
            {t("sarv")}
          </h5>
          <div className="absolute top-full">
            <Icons.NotchDown className="h-[7px] w-[16px] text-blue-sarv" />
          </div>
        </div>
        <div className="relative hidden sm:flex h-full min-w-[180px] items-center justify-center bg-pink-ehea">
          <h5
            className="font-bold text-primary-foreground px-5 hover:cursor-pointer"
            onClick={() => window.open("https://data.ghg.ee/")}
          >
            {t("ehea")}
          </h5>
          <div className="absolute top-full">
            <Icons.NotchDown className="h-[7px] w-[16px] text-pink-ehea" />
          </div>
        </div>
        <div className="mr-8 flex flex-1 items-center justify-end text-primary">
          <HeaderLanguageSelector />
          <Button
            variant="icon"
            size="fit"
            className="ml-6"
            type="button"
            asChild
          >
            <a target="_blank" rel="noreferrer">
              <Icons.HelpCircleFilled />
            </a>
          </Button>
        </div>
      </div>
      <div className="ml-0 mr-0 flex h-16 items-center">
        <div className="ml-8">
          <img
            src="/taltech.png"
            width={61}
            height={34}
            alt="TalTech logo"
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="mr-8 flex flex-1 items-center justify-end text-secondary-foreground ">
          <div className="mr-12 border-l">
            <Icons.TallinnaTehnikaulikool className="h-[21px] w-[126px] pl-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
