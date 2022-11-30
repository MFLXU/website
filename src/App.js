import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import { createContext } from "react";
import { useState } from "react";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import OurSpecialities from "./components/OurSpecialities";
export const LanguageContext = createContext("uk");
function App() {
  const [lang, setLang] = useState("uk");
  const { t, i18n } = useTranslation();
  return (
    <div className={lang == "uk" ? "text-left" : "text-right"}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <Navbar />
        <Hero />
        <Activities />
        <OurSpecialities />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
