import ButtonMain from "../ui/ButtonMain.jsx";
import {useState, useRef, useEffect} from "react";
import {Link} from "react-scroll";
import NavLink from "../ui/NavLink.jsx";

function NavBar(){

  const [isDisplayed, setIsDisplayed] = useState(false);

  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleUX(event) {
        if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
          setIsDisplayed(false);
        }
    }
    document.addEventListener('click', handleUX)
    return () => {
      document.removeEventListener('click', handleUX);
    }
  }, []);

  function handleMenu(){
    setIsDisplayed(prev => !prev);
  }

  const links = [
    {link: 'About me', id: 'about'}, 
    {link: 'Offer', id: 'offer'}, 
    {link: 'Contact', id: 'contact'}
  ];

  return(
    

  <div ref={dropDownRef}>
  <nav className={`flex h-18 w-full fixed top-0 left-0 right-0 lg:px-16 md:px-8 py-2 bg-white ${!isDisplayed ? 'shadow' : ''} z-50`} >
    <div className="left-section mr-auto"><Link to="hero" smooth={true} duration={300} offset={-100}><img className="cursor-pointer w-auto h-14 hover:scale-110 transition-all duration-500 " src="./src/assets/logo2.png" alt="" /></Link></div>
    <div className="middle-section flex">
      <ul className="lg:gap-5 gap-3 items-center h-full hidden sm:flex">
        {links.map((link) => 
          <NavLink key={link.id} link={link} className={'h-full cursor-pointer hover:text-main flex px-2 items-center rounded w-full transition-all duration-300 font-medium text-blackText whitespace-nowrap'} offset={-70} activeClass={'text-main underline decoration-2 decoration-main underline-offset-20'}></NavLink>
        )}
      </ul>
    </div>
    <div className="right-section flex items-center ml-6 gap-3">
      <img className={`w-8 sm:hidden cursor-pointer ${!isDisplayed ? 'block' : 'hidden'}`} src="./src/assets/menu.svg" alt="" onClick={handleMenu}  role="button" tabIndex={0} aria-expanded={isDisplayed}/>
      <img src="./src/assets/close.svg" className={`w-8 ${isDisplayed ? 'block' : 'hidden'} cursor-pointer`} alt="" onClick={handleMenu} />
      <ButtonMain className="bg-main text-white hover:bg-white border-main hover:text-main shadow-lg">Enroll</ButtonMain>
    </div>
  </nav>

    <ul className={`fixed top-18 ${isDisplayed ? 'translate-y-0' : '-translate-y-60'}  w-full transition-all duration-700 ease-in-out z-40 shadow`}>
      {links.map(link =>
      <NavLink key={link.id} link={link} className={'w-full flex align-center justify-center py-2 transition-all ease-in-out duration-400 bg-white hover:text-white hover:bg-main font-medium cursor-pointer'} offset={-80} activeClass={'!bg-main !text-white'} onClick={handleMenu}></NavLink>
      )}
      </ul>
      </div>
  )
}

export default NavBar