import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function SEO() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("seo.title");

    const description =
      document.querySelector(
        'meta[name="description"]'
      );

    if (description) {
      description.setAttribute(
        "content",
        t("seo.description")
      );
    }

    document.documentElement.lang =
      i18n.resolvedLanguage || "en";
  }, [t, i18n.language, i18n.resolvedLanguage]);

  return null;
}

export default SEO;