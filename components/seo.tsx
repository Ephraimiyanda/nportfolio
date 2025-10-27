import Head from "next/head";

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
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dg0kdnwt1/image/upload/v1761279203/bdfipp6dcuptjf5sjtrt.jpg"
      />
      <meta property="og:url" content="https://ephraimiyanda.vercel.app" />
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
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dg0kdnwt1/image/upload/v1761279203/bdfipp6dcuptjf5sjtrt.jpg"
      />

      <link rel="icon" href="/icon.png" />
    </Head>
  );
}
