import dz from "../utils/algeria.png";
import uk from "../utils/uk.png";
import { useTranslation } from "react-i18next";
import { MoonIcon } from "@heroicons/react/20/solid";
import { LanguageContext } from "../App";
import { useContext } from "react";
const Navbar = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <div className="py-4">
      <div className="container flex items-center justify-between">
        <a className="font-extrabold text-3xl" href="/">
          Debug Club Biskra
        </a>
        <div className="flex items-center justify-center gap-2">
          <div className="outline-0 flex items-center justify-center p-2 border rounded-md">
            <MoonIcon className="w-4" />
          </div>
          {lang == "uk" ? (
            <button
              onClick={() => {
                i18n.changeLanguage("ar");
                setLang("ar");
              }}
              className="outline-0 flex items-center justify-center p-2 border rounded-md"
            >
              <img className="w-8" src={dz} alt="" />
            </button>
          ) : (
            <button
              onClick={() => {
                i18n.changeLanguage("en");
                setLang("uk");
              }}
              className="outline-0 flex items-center justify-center p-2 border rounded-md"
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
