import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import { createContext } from "react";
import { useState } from "react";
export const LanguageContext = createContext("uk");
function App() {
  const [lang, setLang] = useState("uk");
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Navbar />
      </LanguageContext.Provider>
      <p>{t("title")}</p>
      <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p>
    </div>
  );
}

export default App;
