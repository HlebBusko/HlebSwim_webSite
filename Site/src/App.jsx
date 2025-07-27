import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/layout/HeroSection.jsx';
import AboutMe from './components/layout/AboutMe.jsx';
import Offer from './components/layout/Offer.jsx';
import Contact from './components/layout/Contact.jsx';
import EnrollTraining from './components/layout/EnrollTraining.jsx';
// import Booking3 from './components/layout/Booking3.jsx';
// import Booking from './components/layout/Booking.jsx';
// import Booking2 from './components/layout/Booking2.jsx';
import Booking4 from './components/layout/Booking4.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full scroll-smooth">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Offer />
      <Contact />
      <EnrollTraining />
      {/* <Booking /> */}
      {/* <Booking2 /> */}
      {/* <Booking3 /> */}
      <Booking4 />
      <Footer />
    </div>
  );
}

export default App;
