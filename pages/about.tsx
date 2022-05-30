import React from "react";
import type { GetStaticProps } from "next";

import AboutComponent from "@components/about";
import Layout from "@/components/global/layout";
import { getCategories } from "@api/graph";

interface AboutI {
  locale: string;
  categories: { id: string; slug: string; title: string }[];
}

const About: React.FC<AboutI> = ({ locale, categories }) => (
  <Layout
    categories={categories}
    language={locale}
    title="Elizaveta Filips | About"
  >
    <AboutComponent />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = await getCategories();

  return {
    props: { locale: context.locale, categories },
    revalidate: 1,
  };
};

export default About;
