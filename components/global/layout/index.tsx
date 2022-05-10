import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import CustomHead from "@components/global/custom_head";
import LanguageProvider from "@context/language";
import CategoriesProvider from "@context/categories";
import { setHeaderVision } from "@store/slices/global";

interface LayoutI {
  children: JSX.Element | React.ReactNode;
  language: string;
  isHeaderVisible?: boolean;
  categories: { id: string; slug: string; title: string }[];
}

const Layout: React.FC<LayoutI> = ({
  children,
  language,
  isHeaderVisible = false,
  categories,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/") {
      dispatch(setHeaderVision(true));
    }
  }, [isHeaderVisible]);

  return (
    <CategoriesProvider categories={categories}>
      <LanguageProvider language={language}>
        <CustomHead />

        <Header />

        <main>{children}</main>

        <Footer />
      </LanguageProvider>
    </CategoriesProvider>
  );
};

export default Layout;
