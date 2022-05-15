import React from "react";
import type { GetStaticProps } from "next";

import Layout from "@/components/global/layout";
import WorksItem from "@components/works_item";
import { getCategories, getDataBySlug, getWorksSlugs } from "@api/graph";
import { PaintingI } from "@/api/types";

interface PaintingPageI {
  locale: string;
  painting: PaintingI;
  categories: { id: string; title: string; slug: string }[];
}

const Painting: React.FC<PaintingPageI> = ({
  locale,
  painting,
  categories,
}) => (
  <Layout
    categories={categories}
    language={locale}
    title={painting.title}
    image={painting.previewImage.url}
    description={`Size: ${painting.size}, Year: ${painting.year}, Technique: ${painting.technique}`}
  >
    <WorksItem painting={painting} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.id;

  const painting = await getDataBySlug(slug as string);
  const categories = await getCategories();

  return {
    props: { locale: context.locale, painting, categories },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getWorksSlugs();
  const paths = slugs.map(
    (el: { slug: string; category: { slug: string } }) => ({
      params: { id: el.slug, slug: el.category.slug },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export default Painting;
