import dz from "../utils/algeria.png";
import uk from "../utils/uk.png";
import { useTranslation } from "react-i18next";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { LanguageContext } from "../App";
import { useContext } from "react";
import { useState } from "react";
import logo from "../utils/logo.png";
const Navbar = () => {
  const [height, setHeight] = useState(0);
  setInterval(() => {
    setHeight(Math.round(window.scrollY));
  }, 1);
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
    <div
      className={
        height > 0
          ? "shadow-md py-4 fixed top-0 w-full bg-white dark:bg-neutral-900 z-10 duration-300"
          : "py-4 fixed top-0 w-full bg-white dark:bg-neutral-900 z-10 duration-300"
      }
    >
      <div className="container flex items-center justify-between">
        <a
          className=" flex items-center justify-center gap-2 text-3xl text-dbc font-extrabold"
          href="/"
        >
          <img className="w-12" src={logo} alt="" />{" "}
          <span className="hidden md:block">Debug Club Biskra</span>
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
