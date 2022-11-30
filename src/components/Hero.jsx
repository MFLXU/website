import heroImg from "../utils/hero.svg";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LanguageContext } from "../App";
const Hero = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <section className="py-40 mt-10">
      {lang == "uk" ? (
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="flex justify-start flex-col">
            <h2 className="text-2xl font-medium">{t("hero.intro")}</h2>
            <h1 className="text-6xl font-extrabold text-[#ff2c62] mb-4">
              {t("hero.clubname")}
            </h1>
            <p className="text-xl">{t("hero.desc")}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-auto">
              <button className="p-4 text-xl font-medium rounded-md border border-dbc text-dbc">
                {t("hero.buttons.btn1")}
              </button>
              <button className="p-4 hover:bg-opacity-90 duration-300 text-xl font-medium rounded-md bg-dbc text-white">
                {t("hero.buttons.btn2")}
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={heroImg} alt="" />
          </div>
        </div>
      ) : (
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="hidden md:block">
            <img src={heroImg} alt="" />
          </div>
          <div className="flex justify-start flex-col">
            <h2 className="text-2xl font-medium">{t("hero.intro")}</h2>
            <h1 className="text-6xl font-extrabold text-[#ff2c62] mb-4">
              {t("hero.clubname")}
            </h1>
            <p className="text-xl">{t("hero.desc")}</p>
            <div className="grid md:grid-cols-2 gap-4 mt-8 md:mt-auto">
              <button className="p-4 text-xl font-medium bg-opacity-90 duration-300 rounded-md bg-dbc text-white">
                {t("hero.buttons.btn2")}
              </button>
              <button className="p-4 text-xl font-medium rounded-md border border-dbc text-dbc">
                {t("hero.buttons.btn1")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Hero;
