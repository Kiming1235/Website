export const Head = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "?쇰떎8476??쒗겕?덉씤, ??쒖뭅怨좏겕?덉씤",
    alternateName: "Daehan Cargo Crane",
    description:
      "?援ш킅??떆 ?숆뎄 ?좎븫?⑤줈 145(?좎븫?????꾩튂??以묐웾臾셋룹궛???λ퉬쨌嫄댁꽕 ?먯옱 ?댁넚 ?꾨Ц 湲곗뾽?낅땲?? ?덉쟾?섍퀬 ?⑥쑉?곸씤 ?щ젅???곌퀎 ?댁넚 ?붾（?섏쓣 ?쒓났?⑸땲??",
    url: "https://www.daehancargocrane.com",
    image:
      "/android-icon-192x192.png",
    telephone: "010-2332-4822",
    address: {
      "@type": "PostalAddress",
      streetAddress: "?좎븫?⑤줈 145",
      addressLocality: "?숆뎄",
      addressRegion: "?援ш킅??떆",
      postalCode: "",
      addressCountry: "KR",
    },
    areaServed: "KR",
    priceRange: "$",
  };

  return (
    <>
      <title>?쇰떎8476??쒗겕?덉씤, ??쒖뭅怨좏겕?덉씤 | 以묐웾臾셋룹궛???λ퉬 ?댁넚 ?꾨Ц 湲곗뾽</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="?쇰떎8476??쒗겕?덉씤, ??쒖뭅怨좏겕?덉씤? 以묐웾臾? ?곗뾽 ?λ퉬, 嫄댁꽕 ?먯옱 ?댁넚 ?꾨Ц 湲곗뾽?쇰줈, ?덉쟾?섍퀬 ?⑥쑉?곸씤 留욎땄???댁넚 ?붾（?섏쓣 ?쒓났?⑸땲??"
      />
      <meta
        name="keywords"
        content="?쇰떎8476??쒗겕?덉씤, ??쒖뭅怨좏겕?덉씤, 寃쎌궛?щ젅?? ?援ы겕?덉씤, 寃쎌＜?щ젅?? 援щ??щ젅?? ?깆＜?щ젅?? 以묐웾臾??댁넚, ?곗뾽 ?λ퉬 ?댁넚"
      />
      <meta
        name="naver-site-verification"
        content="4775914a9f3ec89f8319d68d878db78083e33fc2"
      />
      <meta
        name="naver-site-verification"
        content="c11cba63c6d7d068d4ad3d7e96912b1392370252"
      />
      <meta
        name="google-site-verification"
        content="V_Dy82B1500RiHa5FShJi7-d07BCH05W-UTlqrYMLLs"
      />

      {/* Favicon - Standard */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />

      {/* Apple Icons - iOS */}
      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="apple-touch-icon-precomposed" href="/apple-icon-precomposed.png" />

      {/* Android Icons */}
      <link rel="icon" type="image/png" sizes="36x36" href="/android-icon-36x36.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/android-icon-48x48.png" />
      <link rel="icon" type="image/png" sizes="72x72" href="/android-icon-72x72.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/android-icon-96x96.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="/android-icon-144x144.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />

      {/* Microsoft Icons - Windows */}
      <link rel="icon" type="image/png" sizes="70x70" href="/ms-icon-70x70.png" />
      <link rel="icon" type="image/png" sizes="150x150" href="/ms-icon-150x150.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="/ms-icon-144x144.png" />
      <link rel="icon" type="image/png" sizes="310x310" href="/ms-icon-310x310.png" />

      {/* Manifest & Browser Config */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#1E293B" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#1E293B" />

      {/* ??Open Graph (SNS / ?ㅼ씠踰??꾨━酉곗슜) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.daehancargocrane.com" />
      <meta property="og:title" content="?쇰떎8476??쒗겕?덉씤, ??쒖뭅怨좏겕?덉씤 | 以묐웾臾셋룹궛???λ퉬 ?댁넚 ?꾨Ц 湲곗뾽" />
      <meta property="og:description" content="?쇰떎8476??쒗겕?덉씤, ??쒖뭅怨좏겕?덉씤? ?援?룰꼍?걔룰꼍二셋룰뎄誘맞룹꽦二?吏??뿉??以묐웾臾? ?곗뾽 ?λ퉬, 嫄댁꽕 ?먯옱 ?댁넚???꾨Ц?쇰줈 ?섎뒗 湲곗뾽?낅땲??" />
      <meta property="og:image" content="https://www.daehancargocrane.com/favicon-192.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* ??援ъ“???곗씠??(JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};
