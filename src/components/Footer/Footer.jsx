import "./footer.css";

export default function Footer({
  onSubscribeEnter,
  onSubscribeExit,
  onLinkEnter,
  onLinkExit,
  scrollToAbout,
}) {
  const linkSections = [
    {
      title: "Become part of Our Team",
      links: [
        {
          text: "Careers at Evermorrow Labs",
          link: "https://www.dropbox.com/scl/fi/u8z4niv11eyu9r39ev013/Evermorrow-Labs-Hiring.paper?rlkey=t1bv5j3i0i5rwcqzlk3e26f1s&st=a04swdj0&dl=0",
        },
      ],
    },
  ];

  const ccLinks = [
    {
      text: "About Us",
      link: '#',
      onClick: (e) => {
        e.preventDefault();
        scrollToAbout();
      },
    },
    {
      text: "Privacy Policy",
      link: "https://www.privacypolicies.com/live/382047d1-b779-4f05-881f-388f44d796e9",
    },
  ];

  const socials = [
    {
      iconPath: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/company/evermorrow-labs/",
    },
    // {
    //   iconPath: "/icons/instagram.svg",
    //   link: "https://www.instagram.com/evermorrowlabs/",
    // },
    // {
    //   iconPath: "/icons/x.svg",
    //   link: "https://www.x.com/evermorrowlabs/",
    // },
  ];

  return (
    <div className="footer">
      <img src="/footerTop.svg" />
      <div className="footer-content">
        <div className="footer-above">
          <div className="footer-subscribe">
            <p>Stay tuned for updates and releases</p>
            <p style={{ fontSize: "18px", color: '#a398bb'}}>Reach out at ojas@evermorrowlabs.com</p>
            {/* <div className="footer-input">
              <input placeholder="your email" />
              <button
                onMouseEnter={onSubscribeEnter}
                onMouseLeave={onSubscribeExit}
              >
                Subscribe
              </button>
            </div> */}
          </div>
          {linkSections.map((linkSection, ind) => {
            return (
              <div className="footer-comp" key={ind}>
                <h3>{linkSection.title}</h3>
                <div className="footer-links">
                  {linkSection.links.map((l) => {
                    return (
                      <a
                        href={l.link}
                        key={l.link}
                        target="_blank"
                        onMouseEnter={onLinkEnter}
                        onMouseLeave={onLinkExit}
                      >
                        {l.text}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer-below">
          <div className="footer-below-left">
            <p>© 2024 Evermorrow labs Private Limited</p>
            <div className="footer-cc-links">
              {ccLinks.map((l) => {
                return (
                  <a
                    href={l.link}
                    key={l.link}
                    target="_blank"
                    onClick={l.onClick}
                    onMouseEnter={onLinkEnter}
                    onMouseLeave={onLinkExit}
                  >
                    {l.text}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-below-right">
            {socials.map((social) => {
              return (
                <a
                  href={social.link}
                  key={social.link}
                  target="_blank"
                  onMouseEnter={onLinkEnter}
                  onMouseLeave={onLinkExit}
                >
                  <img src={social.iconPath} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
