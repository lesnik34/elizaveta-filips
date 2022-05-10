import React from "react";
import type { GetStaticProps } from "next";

import Layout from "@/components/global/layout";
import CategoriesPage from "@components/categories/page";
import { getCategories, getCategoryData } from "@api/graph";
import { PaintingI } from "@/api/types";

interface CategoryI {
  locale: string;
  paintings: PaintingI[];
  category: { id: string; title: string; slug: string };
  categories: { id: string; title: string; slug: string }[];
}

const Category: React.FC<CategoryI> = ({
  locale,
  paintings,
  category,
  categories,
}) => (
  <Layout categories={categories} language={locale}>
    <CategoriesPage paintings={paintings} category={category} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const paintings = await getCategoryData(slug as string);
  const categories = await getCategories();
  const category = categories.find((el: { slug: string }) => el.slug === slug);

  return {
    props: { locale: context.locale, paintings, category, categories },
  };
};

export const getStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((el: { slug: string }) => ({
    params: { slug: el.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Category;
