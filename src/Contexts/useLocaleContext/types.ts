import { ReactElement } from "react";
import { DirectionType } from "antd/lib/config-provider";
import { Locale } from "antd/lib/locale";
import { supportedLanguages } from "./config";

import { LocalizationFile } from "../../models/localization";

export type SupportedLanguages = (typeof supportedLanguages)[number];

export type LocaleContextType = {
  locale?: Locale;
  direction: DirectionType;
  localizationFile: LocalizationFile;
  currentLanguage: SupportedLanguages;
  changeLanguage: (language?: SupportedLanguages) => void;
};

export type UseLocaleContext = {
  children: ReactElement;
};
