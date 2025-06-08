import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSection from "./components/layout/HeroSection.jsx";
import AboutMe from "./components/layout/AboutMe.jsx";
import Offer from "./components/layout/Offer.jsx";
import Contact from "./components/layout/Contact.jsx";
import Enroll from "./components/layout/Enroll.jsx";

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full scroll-smooth">
     <NavBar />
     <HeroSection />
     <AboutMe />
     <Offer />
     <Contact />
     <Enroll />
     <Footer />
    </div>
  )
}

export default App
