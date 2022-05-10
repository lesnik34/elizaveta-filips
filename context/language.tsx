import React, { createContext } from "react";

import { LANGUAGE_CONTEXT_VALUE } from "@utils/constants";

interface LanguageI {
  children: React.ReactNode;
  language: string;
}

export const LanguageContext = createContext(LANGUAGE_CONTEXT_VALUE);

const Language: React.FC<LanguageI> = ({ children, language }) => (
  <LanguageContext.Provider value={language}>
    {children}
  </LanguageContext.Provider>
);

export default Language;
