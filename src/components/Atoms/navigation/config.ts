import { LocalizationFile } from "../../../models/localization";
import { MenuItem } from "./types";

export const items = (localizationFile: LocalizationFile): MenuItem[] => [
  { key: "1", label: localizationFile.buttons.home },
  { key: "2", label: localizationFile.buttons.prices },
  { key: "3", label: localizationFile.buttons.contactSales },
];
