interface RegionalHeadProps {
  regionName: string;
  regionTitle: string; // ??"泥?룄 ?щ젅?? 泥섎읆 | ?놁씠
  keywords: string;
  streetAddress: string;
  addressRegion: string;
  phone: string;
  url: string;
  ogImage?: string;
  areaServed?: string[];
  canonical?: string;
}

export const RegionalHead = ({
  regionName,
  regionTitle,
  keywords,
  streetAddress,
  addressRegion,
  phone,
  url,
  ogImage = "/android-icon-192x192.png",
  areaServed,
  canonical,
}: RegionalHeadProps) => {

  const fullTitle = `${regionTitle} ?щ젅??| ?쇰떎8476??쒗겕?덉씤, ??쒖뭅怨좏겕?덉씤`;

  const description =
    `${regionName} ?щ젅?? ${regionName} 移닿퀬?щ젅?? ` +
    `以묐웾臾셋룹궛???λ퉬쨌嫄댁꽕 ?먯옱 ?댁넚 ?꾨Ц 湲곗뾽?쇰줈 ` +
    `?덉쟾?섍퀬 ?⑥쑉?곸씤 留욎땄???댁넚 ?붾（?섏쓣 ?쒓났?⑸땲??`;

  const localBusinessSchema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `?쇰떎8476??쒗겕?덉씤 ${regionName}`,
    alternateName: `Daehan Cargo Crane ${regionName}`,
    description,
    url,
    image: ogImage,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: regionName,
      addressRegion,
      addressCountry: "KR",
    },
    priceRange: "$",
  };

  if (areaServed && areaServed.length > 0) {
    localBusinessSchema.areaServed = areaServed;
  }

  return (
    <>
      <title>{fullTitle}</title>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
};
