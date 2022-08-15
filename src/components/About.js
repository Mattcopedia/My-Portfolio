import React,{useEffect} from "react";
import "./Padding.css" 
import  Aos  from 'aos';  
import "aos/dist/aos.css"; 

const About = () => {

  useEffect(() => {  
    Aos.init({ duration: 1000, once: false, });  
    Aos.refresh();     
  }, []); 



  return (
    <div className="py-20 down bg-gradient-to-b from-gray-800 to-black">
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-111">
          <p data-aos="fade-up" className="text-4xl font-bold inline border-b-4 border-gray-500 pt-4">
            About
          </p>
        </div>

        <p data-aos="fade-up" className="text-xl mt-10">
        I am a front end Web developer and Designer with a high level of experience.I use Bootstrap,html,css,JavaScript,React.js Nextjs,Redux,Rest API's,Firebase, WordPress for front end web development.I build and design websites and Web Application using React, bootstrap,Css3,Git Version Control. I create and maintain sites with scalable and Reusable Code.
        </p>

        <br />

        <p data-aos="fade-up" className="text-xl">
        Highly focused and multifaceted Software developer experienced working with React and Next  framework also in working with UX/UI Product designers in structuring and designing web pages, products, also collaborate with backend developers in ensuring technical feasibility and fetching data from the backend with a strong client satisfaction record. 
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default About;
