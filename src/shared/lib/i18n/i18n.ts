import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./locales/en";
import * as ru from "./locales/ru";
i18n
  .use(initReactI18next) 
  .init({
    resources: {
        en: {
            dashboard: en.DashTranslationEn,
            total: en.TotalTableEN,
            controls: en.ControlsEn,
            auth: en.AuthEN,
            course: en.CourseEN,
        },
        ru: {
            dashboard: ru.DashTranslationRu,
            total: ru.TotalTableRu,
            controls: ru.ControlsRu,
            auth: ru.AuthRU,
            course: ru.CourseRU
        },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n; 