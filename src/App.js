import "./App.css";
import Header from "./Conponents/Header";
import Hero from "./Conponents/Hero";
import Specials from "./Conponents/Specials";
import Testimonials from "./Conponents/Testimonials";
import About from "./Conponents/About";
import Footer from "./Conponents/Footer";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
function App() {
  return (
    <>
      <Header />
      <div className="main overflow-hidden mx-md-auto">
        <div className="div row h"></div>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
        <Footer />
      </div>
    </>
  );
}
export default App;
