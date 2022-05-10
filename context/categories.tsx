import React, { createContext } from "react";

interface CategoriesI {
  children: React.ReactNode;
  categories: { id: string; slug: string; title: string }[];
}

export const CategoriesContext = createContext<
  { id: string; slug: string; title: string }[]
>([]);

const Categories: React.FC<CategoriesI> = ({ children, categories }) => (
  <CategoriesContext.Provider value={categories}>
    {children}
  </CategoriesContext.Provider>
);

export default Categories;
