import { App as AntDesignApp, Button, ConfigProvider, Spin } from "antd";
import { useLocaleContext } from "./contexts/useLocaleContext/useLocaleContext";
import { useDataContext } from "./contexts/useDataContext/useDataContext";
import { Suspense } from "react";
import { theme } from "./utils/theme";

function App() {
  const { locale, direction, changeLanguage, localizationFile } =
    useLocaleContext();
  const { shipmentData, fetchShipmentData, isDataLoading } = useDataContext();

  return (
    <Suspense
      fallback={
        <Spin className="w-100" size="large" spinning={isDataLoading} />
      }
    >
      <ConfigProvider locale={locale} direction={direction} theme={theme}>
        <AntDesignApp>
          <Button
            onClick={() => {
              fetchShipmentData("84043113");
              changeLanguage();
            }}
          >
            {localizationFile.buttons.home}
          </Button>
        </AntDesignApp>
      </ConfigProvider>
    </Suspense>
  );
}

export default App;
