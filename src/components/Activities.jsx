import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { LanguageContext } from "../App";
const Activities = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-center text-5xl mb-8 font-extrabold text-dbc">
          {t("activities.title")}
        </h1>
        {lang == "uk" ? (
          <div className="grid md:grid-cols-4 gap-4 ">
            <div className="border p-4 rounded-md flex items-center gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <p className="text-4xl">📆</p>
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act1")}
              </h2>
            </div>
            <div className="border p-4 rounded-md flex items-center gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <p className="text-4xl">📚</p>
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act2")}
              </h2>
            </div>
            <div className="border p-4 rounded-md flex items-center gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <p className="text-4xl">⚒️</p>
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act3")}
              </h2>
            </div>
            <div className="border p-4 rounded-md flex items-center gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <p className="text-4xl">⭐</p>
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act4")}
              </h2>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-4 ">
            <div className="border p-4 rounded-md flex items-center justify-end gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act4")}
              </h2>
              <p className="text-4xl">⭐</p>
            </div>
            <div className="border p-4 rounded-md flex items-center justify-end gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act3")}
              </h2>
              <p className="text-4xl">⚒️</p>
            </div>
            <div className="border p-4 rounded-md flex items-center justify-end gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act2")}
              </h2>
              <p className="text-4xl">📚</p>
            </div>
            <div className="border p-4 rounded-md flex items-center justify-end gap-2 hover:border-dbc duration-300 cursor-default dark:border-neutral-800 dark:hover:border-dbc">
              <h2 className="text-2xl font-extrabold text-dbc">
                {t("activities.act1")}
              </h2>
              <p className="text-4xl">📆</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Activities;
