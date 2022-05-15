import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface CustomHeadI {
  title?: string;
  description?: string;
  image?: string;
}

const CustomHead: React.FC<CustomHeadI> = ({
  title = "Elizaveta Filips",
  description = "Art by Elizaveta Filips",
  image = "/images/jpg/og-image.jpg",
}) => {
  const router = useRouter();

  return (
    <Head>
      <title key="title" itemProp="headline">
        {title}
      </title>
      <link
        rel="canonical"
        href={`https://elizavetafilips.com${router.asPath}`}
      />

      <meta name="title" content={title} />
      <meta
        itemProp="keywords"
        name="keywords"
        content="art, elizaveta filips, paintings"
      />
      <meta itemProp="description" name="description" content={description} />

      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:image" content={image} key="ogimage" />
      <meta
        property="og:url"
        content={`https://elizavetafilips.com${router.asPath}`}
        key="ogurl"
      />
      <meta property="og:description" content={description} key="ogdesc" />

      <link rel="manifest" href="fav/site.webmanifest.json" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="robots" content="all" />
      <meta name="msapplication-TileImage" content="fav/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/fav/site.webmanifest" />
      <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default CustomHead;
