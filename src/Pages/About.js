import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="Div-Margin-Top">
      <div>
        <h2>{t("Concept of ReactJS")}</h2>
      </div>
      <div>
        <p>{t("Concept")}</p>
      </div>
      <div>
        <h5>{t("Reason to choose ReactJS")}</h5>
      </div>
      <div>
        <p>{t("Reason")}</p>
      </div>
    </div>
  );
};

export default About;
