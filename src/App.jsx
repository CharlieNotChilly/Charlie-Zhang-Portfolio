import "./app.scss"
import Navbar from "./component/navbar/Navbar"
import Hero from "./component/hero/Hero"
import Parallax from "./component/parallax/Parallax"
import Service from "./component/service/Service"
import Portfolio from "./component/portfolio/Portfolio"
import Contact from "./component/contact/Contact"
import Cursor from "./component/cursor/Cursor"

const App = () => {
  return <div>
    <Cursor />
    <section id = "Homepage"> 
      <Navbar />
       <Hero /> 
    </section>
     <section id = "Services"><Parallax type = "service"/></section>
    <section><Service /></section>
    <section id = "Portfolio"><Parallax type = "portfolio"/></section>
    <Portfolio />
    <section id = "contact"><Contact /></section> 
      
  </div>;
};

export default App;
