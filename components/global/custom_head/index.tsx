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
        href={`https://elizavetafilips.com${router?.asPath || "/"}`}
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
        content={`https://elizavetafilips.com${router?.asPath || "/"}`}
        key="ogurl"
      />
      <meta property="og:description" content={description} key="ogdesc" />

      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/fav/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/fav/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/fav/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/fav/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/fav/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/fav/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/fav/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/fav/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/fav/android-icon-192x192.png"
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
        sizes="96x96"
        href="/fav/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <link rel="manifest" href="/fav/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/fav/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default CustomHead;
