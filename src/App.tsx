import "./styles.css";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <h2>{t("Welcome to React")}</h2>
    </div>
  );
}
