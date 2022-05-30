import React from "react";
import type { GetStaticProps } from "next";

import Layout from "@/components/global/layout";
import Categories from "@components/categories";
import { getCategories } from "@api/graph";

interface WorksI {
  locale: string;
  categories: {
    id: string;
    title: string;
    slug: string;
  }[];
}

const Works: React.FC<WorksI> = ({ locale, categories }) => (
  <Layout
    categories={categories}
    language={locale}
    title="Elizaveta Filips | Categories"
  >
    <Categories categories={categories} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = await getCategories();

  return {
    props: { locale: context.locale, categories },
    revalidate: 1,
  };
};

export default Works;
