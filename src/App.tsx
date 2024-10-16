import { App as AntDesignApp, ConfigProvider } from "antd";
import { useLocaleContext } from "./Contexts/useLocaleContext/useLocaleContext";

function App() {
  const { locale, direction, changeLanguage, localizationFile } =
    useLocaleContext();
  return (
    <ConfigProvider locale={locale} direction={direction}>
      <AntDesignApp></AntDesignApp>
    </ConfigProvider>
  );
}

export default App;
