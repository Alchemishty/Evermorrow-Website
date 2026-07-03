import Hero from './components/Hero';
import Vision from './components/Vision';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <a className="skip-link" href="#vision">Skip to content</a>
      <main>
        <Hero />
        <Vision />
      </main>
      <Footer />
    </>
  );
}

export default App;
