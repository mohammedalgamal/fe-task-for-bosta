import { ReactElement } from "react";
import { DirectionType } from "antd/lib/config-provider";
import { Locale } from "antd/lib/locale";
import { supportedLanguages } from "./config";

import ar from "../../assets/localization/ar_EG.json";
import en from "../../assets/localization/en_GB.json";

export type SupportedLanguages = (typeof supportedLanguages)[number];

export type LocaleContextType = {
  locale?: Locale;
  direction: DirectionType;
  localizationFile: typeof ar | typeof en;
  currentLanguage: SupportedLanguages;
  changeLanguage: (language?: SupportedLanguages) => void;
};
export type UseLocaleContext = {
  children: ReactElement;
};
