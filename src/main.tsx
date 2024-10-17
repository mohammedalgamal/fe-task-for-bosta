import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LocaleProvider } from "./Contexts/useLocaleContext/useLocaleContext.tsx";
import { DataProvider } from "./Contexts/useDataContext/useDataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </LocaleProvider>
  </StrictMode>
);
