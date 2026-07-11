import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const languages = [
    {
        code: "en",
        countryCode: "GB",
        label: "EN",
    },
    {
        code: "bg",
        countryCode: "BG",
        label: "BG",
    },
    {
        code: "fr",
        countryCode: "FR",
        label: "FR",
    },
    {
        code: "de",
        countryCode: "DE",
        label: "DE",
    },
];
export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    return (
        <div className="flex items-center gap-2">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`cursor-pointer rounded-md px-2 py-1 text-sm font-medium transition-all duration-200
                            ${i18n.resolvedLanguage === lang.code
                            ? "bg-blue-700 text-white shadow"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <ReactCountryFlag
                            countryCode={lang.countryCode}
                            svg
                            style={{
                                width: "1.1em",
                                height: "1.1em",
                            }}
                        />

                        <span>{lang.label}</span>
                    </div>
                </button>
            ))}
        </div>
    );
}