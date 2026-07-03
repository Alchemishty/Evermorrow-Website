import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <img
            className="footer__logo"
            src="/evermorrow.png"
            alt="Evermorrow Labs"
          />
          <a className="footer__email" href="mailto:ojas@evermorrowlabs.com">
            ojas@evermorrowlabs.com
          </a>
        </div>
        <div className="footer__right">
          <a
            className="footer__social-link"
            href="https://www.linkedin.com/company/evermorrow-labs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer__copyright">
            &copy; 2025 Evermorrow Labs Private Limited
          </span>
        </div>
      </div>
    </footer>
  );
}
