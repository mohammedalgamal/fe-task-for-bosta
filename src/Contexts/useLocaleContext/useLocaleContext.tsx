import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DirectionType } from "antd/lib/config-provider";
import { Locale } from "antd/lib/locale";

import { antdLocales } from "./config";
import type {
  LocaleContextType,
  SupportedLanguages,
  UseLocaleContext,
} from "./types";
import ar from "../../assets/localization/ar_EG.json";
import en from "../../assets/localization/en_GB.json";

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({
  children,
}: UseLocaleContext): ReactElement => {
  const [direction, setDirection] = useState<DirectionType>("rtl");
  const [locale, setLocale] = useState<Locale | undefined>();
  const [currentLanguage, setCurrentLanguage] =
    useState<SupportedLanguages>("ar_EG");
  const [localizationFile, setLocalizationFile] =
    useState<LocaleContextType["localizationFile"]>(ar);

  const localeHandler = async (event: SupportedLanguages) => {
    const file = await antdLocales[event];
    setLocale(file.default);
  };
  if (!locale) {
    localeHandler(currentLanguage);
  }

  const changeLanguage = useCallback(
    (language?: SupportedLanguages) => {
      if (typeof language === "undefined") {
        setCurrentLanguage(currentLanguage === "ar_EG" ? "en_GB" : "ar_EG");
        localeHandler(currentLanguage);
        setDirection(direction === "rtl" ? "ltr" : "rtl");
        setLocalizationFile(localizationFile === ar ? en : ar);
      } else if (language !== currentLanguage) {
        setCurrentLanguage(language);
        localeHandler(currentLanguage);
        if (language.includes("ar")) {
          setDirection("rtl");
          setLocalizationFile(ar);
        } else {
          setDirection("ltr");
          setLocalizationFile(en);
        }
      }
    },
    [currentLanguage, direction, localizationFile]
  );

  const LocaleValue = useMemo(
    () => ({
      locale,
      direction,
      localizationFile,
      changeLanguage,
      currentLanguage: currentLanguage,
    }),
    [locale, direction, localizationFile, changeLanguage, currentLanguage]
  );

  return (
    <LocaleContext.Provider value={LocaleValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined)
    throw new Error("useLangContext was used outside of its Provider");
  return context;
};
