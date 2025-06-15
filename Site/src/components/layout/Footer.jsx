import ButtonMain from "../ui/ButtonMain";
import { Link } from "react-scroll";

function Footer() {
  const links = [
    { title: "About me", id: "about" },
    { title: "Offer", id: "offer" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <div className="mt-auto w-full text-white">
      <hr className="border-t border-gray-300" />
      <div className=" flex justify-between lg:px-16 md:px-8 px-4 py-2">
        <div>
          <h1 className="text-footerText font-bold">Resources:</h1>
          <ul className="flex flex-col">
            {links.map((link) => (
              <Link
                className="text-footerText text-sm hover:text-main cursor-pointer"
                smooth={true}
                duration={300}
                to={link.id}
                offset={-70}
                key={link.id}
              >
                {" "}
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-footerText font-bold">Find me:</div>
          <div className="flex gap-2 items-center justify-center">
            <img
              className="w-6 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              src="./src/assets/instagram.png"
              alt=""
            />
            <img
              className="w-6 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              src="./src/assets/facebook.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <Link
            to="enroll"
            smooth={true}
            duration={300}
            className="inline-block"
            offset={-70}
          >
            <ButtonMain className="hover:bg-main hover:text-white">
              Enroll
            </ButtonMain>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
