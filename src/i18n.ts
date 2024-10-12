import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import enJSON from "./locales/en.json";
import etJSON from "./locales/et.json";
import fiJSON from "./locales/fi.json";

i18n.use({ ...initReactI18next, debug: true }).init({
  resources: {
    en: { translation: { ...enJSON } },
    et: { translation: { ...etJSON } },
    fi: { translation: { ...fiJSON } },
  },
  lng: "et",
});
