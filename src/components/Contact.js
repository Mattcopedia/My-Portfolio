import React, {useEffect} from "react";
import "./Padding.css";
import  Aos  from 'aos';  
import "aos/dist/aos.css";

const Contact = () => {

  useEffect(() => {  
    Aos.init({ duration: 1000, once: false, });       
  }, []); 

  return (
    <div className="padding bg-gradient-to-b from-black to-gray-800">
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 py-20 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p data-aos="fade-up" className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p data-aos="fade-up" className="py-6 mx-auto">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form 
            action="https://getform.io/f/ee90b0a3-4eb1-4bf3-8cbd-2f1503a42468"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input data-aos="fade-up"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input data-aos="fade-up"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea data-aos="fade-up"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button  className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
