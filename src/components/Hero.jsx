import InkCanvas from './InkCanvas';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <InkCanvas />
      <header className="hero__topbar">
        <img
          className="hero__logo"
          src="/evermorrow.png"
          alt="Evermorrow Labs logo"
        />
        <a
          className="hero__contact"
          href="mailto:ojas@evermorrowlabs.com"
        >
          Contact
        </a>
      </header>
      <div className="hero__content">
        <h1 className="hero__title">Evermorrow Labs</h1>
        <p className="hero__subtitle">Building a thousand connected virtual worlds.</p>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
