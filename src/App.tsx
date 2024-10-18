import { App as AntDesignApp, ConfigProvider, Divider, Layout } from "antd";
import { useLocaleContext } from "./contexts/useLocaleContext/useLocaleContext";
import { theme } from "./utils/theme";
import "./styles/global.css";
import { Header } from "./components/Molecules/header/Header";
import { LayoutContent } from "./components/Molecules/layoutContent/LayoutContent";

function App() {
  const { locale, direction } = useLocaleContext();

  return (
    <ConfigProvider locale={locale} direction={direction} theme={theme}>
      <AntDesignApp>
        <Layout>
          <Header />
          <Divider style={{ margin: "0" }} />
          <LayoutContent />
        </Layout>
      </AntDesignApp>
    </ConfigProvider>
  );
}

export default App;
