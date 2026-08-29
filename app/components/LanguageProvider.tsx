"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import { translations } from "../lib/translations";

export type Language = "en" | "ar";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    isArabic: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("ar");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("gmall-language");

        if (savedLanguage === "ar" || savedLanguage === "en") {
            setLanguageState(savedLanguage);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

        localStorage.setItem("gmall-language", language);
    }, [language]);

    const setLanguage = (newLanguage: Language) => {
        setLanguageState(newLanguage);
    };

    return (
        <LanguageContext.Provider
          value={{
            language,
            setLanguage,
            isArabic: language === "ar",
          }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage must be used inside LanguageProvider"
        );
    }

    return context;
}

export function useTranslations() {
    const { language } = useLanguage();

    return translations[language];
}