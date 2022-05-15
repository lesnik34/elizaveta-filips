import React from "react";
import type { GetStaticProps } from "next";

import ContactComponent from "@components/contacts";
import Layout from "@/components/global/layout";
import { getCategories } from "@api/graph";

interface ContactsI {
  locale: string;
  categories: { id: string; slug: string; title: string }[];
}

const Contacts: React.FC<ContactsI> = ({ locale, categories }) => (
  <Layout
    categories={categories}
    language={locale}
    title="Elizaveta Filips | Contact"
  >
    <ContactComponent />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = await getCategories();

  return {
    props: { locale: context.locale, categories },
  };
};

export default Contacts;
