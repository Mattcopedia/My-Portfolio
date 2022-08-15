import React, {useEffect} from "react"
import Ecomm from "../assets/portfolio/Ecomm.PNG";
import forbesdigits from "../assets/portfolio/forbes digits.png";
import webchat from "../assets/portfolio/webchat.PNG";
import MattcoFreeBooks from "../assets/portfolio/Mattco Free Books.PNG";
import meetmctina from "../assets/portfolio/meet mc Tina.png"; 
import cakes from "../assets/portfolio/3d desert cakes shop.png";
import  Aos  from 'aos';  
import "aos/dist/aos.css"; 


const Portfolio = () => {
  useEffect(() => {  
    Aos.init({ duration: 1000, once: false, });       
  }, []); 

  const portfolios = [
    {
      id: 1,
      src: Ecomm,
      href: "https://ecommerces-seven.vercel.app/", 
      code: "https://github.com/Mattcopedia?tab=repositories",
    },
    {
      id: 2,
      src: forbesdigits,
      href: "https://forbesdigits.com/", 
      code: "https://github.com/Mattcopedia?tab=repositories",
    },
    {
      id: 3,
      src: webchat,
      href: "https://web-chats.netlify.app/ ", 
      code: "https://github.com/Mattcopedia?tab=repositories",
    },
    {
      id: 4,
      src: MattcoFreeBooks,
      href: "https://mattcofreebooksandupdates.com/", 
      code: "https://github.com/Mattcopedia?tab=repositories",
    },
    {
      id: 5,
      src: meetmctina,
      href: "https://meetmctina.netlify.app/", 
      code: "https://github.com/Mattcopedia?tab=repositories",
    },
    {
      id: 6,
      src: cakes,  
      href: "https://3ddesertcakes.shop/", 
      code: "https://github.com/Mattcopedia?tab=repositories",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 pb-20"> 
     <div className="py-20  bg-gradient-to-b from-black to-gray-800 w-full">
    <div
      name="portfolio" id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-11"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p data-aos="fade-up" className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p data-aos="fade-up" className="py-6">Check out some of my work right here</p>
        </div>

        <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code }) => (
            <div data-aos="fade-up" key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img data-aos="fade-up"
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div data-aos="fade-up" className="flex items-center justify-center ">
                <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a> 
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
    

  );
};

export default Portfolio;
