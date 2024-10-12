"use client";

import { useTranslation } from "react-i18next";
import { Separator } from "./ui/separator";

import { cn } from "@/lib/utils";
import { useState } from "react";

const HeaderLanguageSelector = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = (newLanguage: string) => {
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <div className="flex h-5 items-center space-x-2">
      <>
        <button
          type="button"
          onClick={() => handleChangeLanguage("en")}
          className={cn("uppercase before:font-proximaBold", {
            "font-proximaBold": currentLanguage === "en",
          })}
        >
          EN
        </button>
        <Separator orientation="vertical" className="h-4" />
        <button
          type="button"
          onClick={() => handleChangeLanguage("et")}
          className={cn("uppercase before:font-proximaBold", {
            "font-proximaBold": currentLanguage === "et",
          })}
        >
          ET
        </button>
        <Separator orientation="vertical" className="h-4" />
        <button
          type="button"
          onClick={() => handleChangeLanguage("fi")}
          className={cn("uppercase before:font-proximaBold", {
            "font-proximaBold": currentLanguage === "fi",
          })}
        >
          FI
        </button>
      </>
    </div>
  );
};

export default HeaderLanguageSelector;
