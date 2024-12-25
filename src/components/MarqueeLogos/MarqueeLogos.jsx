import "./marqueeLogos.css";

export default function MarqueeLogos() {
  const imgPaths = [
    'https://cdn.prod.website-files.com/64a285c0af324ae978642cc6/64b7ad15bce1f024feec868a_logo.png',
    "/logos/meta.svg",
    'https://www.ecell-iitkgp.org/images/logo-white.png',
    'https://gsea.org/images/GSEA-Assets/GSEA_short_horiz_website.png',
  ];

  return (
    <div className="marquee-container">
      <p className="marquee-title">Backed by</p>
    <div className="logos">
      <div className="logos-slide">
        {imgPaths.map((imgPath) => {
          return <img key={imgPath} src={imgPath} />;
        })}
      </div>
      <div className="logos-slide">
        {imgPaths.map((imgPath) => {
          return <img key={imgPath + "1"} src={imgPath} />;
        })}
      </div>
    </div>
    </div>
  );
}
