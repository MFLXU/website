import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import { createContext } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
export const LanguageContext = createContext("uk");
function App() {
  const [lang, setLang] = useState("uk");
  const { t, i18n } = useTranslation();
  return (
    <div className={lang == "uk" ? "text-left" : "text-right"}>
      <Routes>
        <LanguageContext.Provider value={{ lang, setLang }}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </LanguageContext.Provider>
      </Routes>
    </div>
  );
}

export default App;
