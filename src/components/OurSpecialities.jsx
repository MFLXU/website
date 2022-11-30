import { useTranslation } from "react-i18next";
import wd from "../utils/web.svg";
import md from "../utils/mobile.svg";
import ai from "../utils/ai.svg";
import ds from "../utils/design.svg";
import { useContext } from "react";
import { LanguageContext } from "../App";
const OurSpecialities = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-center text-5xl mb-8 font-extrabold text-dbc">
          {t("specialities.title")}
        </h1>
        {lang == "uk" ? (
          <div className="grid gap-8">
            {/* spes 1 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp1.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp1.desc")}</p>
              </div>
              <div>
                <img src={wd} alt="" />
              </div>
            </div>
            {/* spes 2 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div>
                <img src={md} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp2.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp2.desc")}</p>
              </div>
            </div>
            {/* spes 3 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp3.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp3.desc")}</p>
              </div>
              <div>
                <img src={ai} alt="" />
              </div>
            </div>
            {/* spes 4 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div>
                <img src={ds} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp4.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp4.desc")}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {/* spes 1 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div>
                <img src={wd} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp1.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp1.desc")}</p>
              </div>
            </div>
            {/* spes 2 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp2.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp2.desc")}</p>
              </div>
              <div>
                <img src={md} alt="" />
              </div>
            </div>
            {/* spes 3 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div>
                <img src={ai} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp3.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp3.desc")}</p>
              </div>
            </div>
            {/* spes 4 */}
            <div className="grid md:grid-cols-2 gap-8 p-8 ">
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-dbc mb-4">
                  {t("specialities.sp4.title")}
                </h3>
                <p className="text-xl">{t("specialities.sp4.desc")}</p>
              </div>
              <div>
                <img src={ds} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default OurSpecialities;
