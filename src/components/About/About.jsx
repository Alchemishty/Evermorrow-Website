import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-header">
        <p className="about-title">
          About <span className="blue-text">Us</span>
        </p>
      </div>
      <div className="about-body">
        <p>
          An upcoming VR Studio focusing on making immersive experiences accessible to users. We are disrupting the way VR games are built, played and monetised by building a free-to-play ecosystem of fun, interactive and interconnected experiences. 
        </p>
        <p className="about-right-text">
        Hailing from IIT Kharagpur and BITS Pilani, we have forged MMOs, casual games, BCI/VR integrations before. Combined with the extensive research and exploration done at Entrepreneur First, we’ve set our eyes on the goal of building a thousand connected virtual worlds populated with games that players can truly enjoy.
        </p>
        {/* <div className="about-image">
          <img src="/about.png" />
        </div> */}
      </div>
    </div>
  );
}
