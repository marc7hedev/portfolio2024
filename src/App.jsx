import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return <div>

    <Cursor/>
    <section id="Inicio">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Servicios"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portafolio"><Parallax type="portfolio"/></section>
      <Portfolio/>
    <section id="Contacto">
      <Contact/>
    </section>

    {/* <Test/>
    <Test/> */}

  </div>;
};

export default App;
