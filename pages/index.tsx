import React from "react";
import type { GetStaticProps } from "next";

import Hero from "@components/hero";
import Layout from "@/components/global/layout";
import { getCategories, getFeatured, getPreviews } from "@api/graph";
import { PreviewI } from "@api/types";

interface HomeI {
  locale: string;
  preview: PreviewI[];
  categories: { id: string; slug: string; title: string }[];
}

const Home: React.FC<HomeI> = ({ locale, preview, categories }) => (
  <Layout
    categories={categories}
    language={locale}
    title="Elizaveta Filips | Home"
  >
    <Hero preview={preview} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const paintings = await getFeatured();
  const categories = await getCategories();
  const preview = await getPreviews();

  return {
    props: { locale: context.locale, featured: paintings, preview, categories },
    revalidate: 1,
  };
};

export default Home;
