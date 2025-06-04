import ButtonMain from "../ui/ButtonMain";

function Footer(){

  return(<div className="mt-auto w-full text-white">
    <hr />
    <div className="bg-bgSection flex justify-between lg:px-16 md:px-8 px-4 py-2">
      <div>
        <h1 className="text-footerText font-bold">Resources:</h1>
        <ul>
          <li><a className="text-footerText text-sm hover:text-main" href="#">Offer</a> </li>
          <li><a className="text-footerText text-sm hover:text-main" href="#">Pricing</a></li>
          <li><a className="text-footerText text-sm hover:text-main" href="#">About me</a></li>
          <li><a className="text-footerText text-sm hover:text-main" href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="text-footerText font-bold">Find me:</div>
        <div className="flex gap-2 items-center justify-center">
          <img className="w-6 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" src="./src/assets/instagram.png" alt="" />
          <img className="w-6 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" src="./src/assets/facebook.png" alt="" />
        </div>
      </div>
         <div>
        <ButtonMain className="hover:bg-main hover:text-white">Enroll</ButtonMain>
      </div>  
    </div>
  </div>);
}

export default Footer