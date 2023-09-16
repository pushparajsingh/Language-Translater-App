import React, { Component } from "react";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="Div-Margin-Top">
      <div>
        <h2>{t("Welcome to React")}</h2>
      </div>
      <div>
        <p>{t("Overview")}</p>
      </div>
    </div>
  );
}
