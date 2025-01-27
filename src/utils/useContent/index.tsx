import LanguageContext from "../LanguageContext";
import { useContext } from "react";
import { ENGLISH_CONTENT, PORTUGUESE_CONTENT } from "./constants";

const useContent = () => {
  const { language } = useContext(LanguageContext);

  return language === "pt" ? PORTUGUESE_CONTENT : ENGLISH_CONTENT;
};

export default useContent;
