import dz from "../utils/algeria.png";
import uk from "../utils/uk.png";
import { useTranslation } from "react-i18next";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { LanguageContext } from "../App";
import { useContext } from "react";
import { useState } from "react";
const Navbar = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState("light");
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  } else if (theme === "dark") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }
  const themeSwitcher = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <div className="py-4 fixed top-0 w-full bg-white dark:bg-neutral-900 z-10">
      <div className="container flex items-center justify-between">
        <a className="font-extrabold text-4xl text-dbc" href="/">
          Debug Club Biskra
        </a>
        <div className="flex items-center justify-center gap-2">
          <div
            onClick={themeSwitcher}
            className="hover:-translate-y-0.5 p-1 rounded-md border bg-dbc  border-dbg duration-300 cursor-pointer dark:border-neutral-800 hover:border-dbc dark:hover:border-dbc"
          >
            {theme === "light" ? (
              <MoonIcon className="w-6 text-white" />
            ) : (
              <SunIcon className="w-6 text-white" />
            )}
          </div>
          {lang == "uk" ? (
            <button
              onClick={() => {
                i18n.changeLanguage("ar");
                setLang("ar");
              }}
              className="outline-0 flex items-center justify-center p-2 border rounded-md dark:border-neutral-800 hover:border-dbc dark:hover:border-dbc"
            >
              <img className="w-8" src={dz} alt="" />
            </button>
          ) : (
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                setLang("uk");
              }}
              className="outline-0 flex items-center justify-center p-2 border rounded-md dark:border-neutral-800 hover:border-dbc dark:hover:border-dbc"
            >
              <img className="w-8" src={uk} alt="" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
