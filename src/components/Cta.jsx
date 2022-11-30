import { useTranslation } from "react-i18next";
const Cta = () => {
  const { t } = useTranslation();
  return (
    <section className="py-10">
      <div className="container">
        <div className="bg-dbc text-white p-8 gap-8 rounded-md flex flex-col justify-between items-center">
          <h1 className="text-6xl font-extrabold">{t("cta.cta")}</h1>
          <button className="bg-white text-dbc text-2xl font-medium py-4 px-8 rounded-md">
            {t("cta.btn")}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Cta;
