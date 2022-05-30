import React from "react";
import type { GetStaticProps } from "next";

import Hero from "@components/hero";
import Layout from "@/components/global/layout";
import Featured from "@components/featured";
import { getCategories, getFeatured } from "@api/graph";
import { PaintingI } from "@api/types";

interface HomeI {
  locale: string;
  featured: PaintingI[];
  categories: { id: string; slug: string; title: string }[];
}

const Home: React.FC<HomeI> = ({ locale, featured, categories }) => (
  <Layout
    categories={categories}
    language={locale}
    title="Elizaveta Filips | Home"
  >
    <Hero />

    <Featured paintings={featured} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const paintings = await getFeatured();
  const categories = await getCategories();

  return {
    props: { locale: context.locale, featured: paintings, categories },
    revalidate: 1,
  };
};

export default Home;
