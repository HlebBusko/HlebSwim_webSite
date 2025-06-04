import ButtonMain from "../ui/ButtonMain";


function HeroSection(){

  return(<section id="hero" className="flex flex-col md:flex-row gap-4 md:gap-2 lg:px-16 sm:px-8 px-4 w-full py-2">
    <div className="flex-1 flex flex-col align-center justify-center sm:w-[100%] w-[80%] gap-2">
      <h1 className="font-bold text-xl lg:text-2xl">Feel confident in water in just one month. Get rid of fear. Enjoy the vacations</h1>
      <p>Individual and split swimming lessons for adults and kids from 5 years old</p>
      <div className="mt-4">
         <ButtonMain className="bg-main text-white hover:bg-white border-main hover:text-main shadow-lg">Trial lesson</ButtonMain>
      </div>
    </div>
    <div className="flex flex-3 justify-center items-center">
        <img className="w-full object-contain h-full 
        md:aspect-[3/2] 
        rounded-lg" src="./src/assets/raingame.jpg" alt="" />      
    </div>
  </section>);
}

export default HeroSection