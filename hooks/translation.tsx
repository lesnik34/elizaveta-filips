import { useContext } from "react";

import { LanguageContext } from "@context/language";

const useTranslation = (ln: {
  [key: string]: {
    [key: string]: string;
  };
}) => {
  const lng = useContext(LanguageContext);

  return (el: string) => ln[lng][el];
};

export default useTranslation;
