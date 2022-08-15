import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        
        </>
      ),
      href: "https://www.linkedin.com/in/ofeimun-mathias-763a15200/", 
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Mattcopedia",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mathiasolumese@gmail.com",     
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Mathias CV Document-1.docx", 
      download: true,
    },
    {
      id: 5, 
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://api.whatsapp.com/send?phone=2349041940612&text=Hi%2C%20This%20is%20the%20Mattco%27s%20admin%20how%20can%20we%20be%20of%20service%20to%20you.",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className=" lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
