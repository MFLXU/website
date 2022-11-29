import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="">
      <Navbar />
      <p>{t("title")}</p>
      <p>{t("description.part1")}</p>
      <p>{t("description.part2")}</p>
    </div>
  );
}

export default App;
