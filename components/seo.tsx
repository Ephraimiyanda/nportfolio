import Head from "next/head";

import { siteConfig } from "@/config/site";

const ogImage = `${siteConfig.url}${siteConfig.ogImage}`;

export default function SEO() {
  return (
    <Head>
      <title>Ephraim Iyanda | Frontend Developer Portfolio</title>

      <meta
        name="description"
        content="I'm Ephraim Iyanda, a passionate Frontend Developer specializing in clean, modern UI, web animations, and performant web experiences built with React and Tailwind CSS."
      />
      <meta
        name="keywords"
        content="Frontend Developer, React Developer, Web Developer, JavaScript, TypeScript, Tailwind CSS, Portfolio, Ephraim Iyanda, Nextjs developer"
      />
      <meta name="author" content="Ephraim Iyanda" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content="Ephraim Iyanda | Frontend Developer" />
      <meta
        property="og:description"
        content="Portfolio of Ephraim Iyanda — Frontend Developer focused on creating clean, interactive, and performant web interfaces."
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ephraim Iyanda — Frontend Developer portfolio" />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ephraim Iyanda | Frontend Developer"
      />
      <meta
        name="twitter:description"
        content="Frontend Developer crafting delightful, fast, and responsive web experiences."
      />
      <meta name="twitter:image" content={ogImage} />

      <link rel="icon" href="/icon.png" />
    </Head>
  );
}
