import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

type LanguageContextProps = {
  language: "en" | "pt";
  setLanguage: (lang: "en" | "pt") => void;
};

const LanguageContext = React.createContext<LanguageContextProps>({
  language: "en",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLanguage: (_) => null,
});

export const LanguageContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const langValue = searchParams.get("lang");

  const setLanguage = (lang: "en" | "pt") => {
    setSearchParams({ lang });
  };

  const language = useMemo(() => {
    if (langValue) {
      if (langValue === "pt") return "pt";
      return "en";
    }

    const userLang = navigator.language;
    if (userLang.startsWith("pt-")) {
      setLanguage("pt");
      return "pt";
    }

    setLanguage("en");
    return "en";
  }, [langValue]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
