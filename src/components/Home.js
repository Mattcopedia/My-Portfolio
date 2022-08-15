import React, {useEffect} from "react";
import portfolioImage from "../assets/portfolioImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "./Padding.css";
import  Aos  from 'aos';  
import "aos/dist/aos.css";   

const Home = () => { 
  useEffect(() => {  
    Aos.init({ duration: 1000, once: false, });       
  }, []);   

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 px-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center pt-4 justify-center h-full px-4 md:flex-row ">
        <div data-aos="fade-right" className="flex flex-col justify-center h-full pt-10">
          <h2 className="text-4xl sm:text-7xl font-bold  wordopen text-white">
            I'm a Frontend  Developer
          </h2> 
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like HTML5, CSS3,
            React, Tailwind, Next JS, Redux, Rest API's, Javascript, Typescript, Bootstrap, Wordpress and Elementor.
          </p> 

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div data-aos="fade-left">
          <img
            src={portfolioImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full py-20"
            width={500} height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
