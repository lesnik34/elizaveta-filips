import React from "react";
import type { GetStaticProps } from "next";

import NotFound from "@components/global/not_found";
import Layout from "@/components/global/layout";
import { getCategories } from "@api/graph";

interface ErrorI {
  locale: string;
  categories: { id: string; slug: string; title: string }[];
}

const Error: React.FC<ErrorI> = ({ locale, categories }) => (
  <Layout categories={categories} language={locale} title="Not Found">
    <NotFound />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = await getCategories();

  return {
    props: { locale: context.locale, categories },
  };
};

export default Error;
