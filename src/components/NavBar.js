
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-scroll"; 
import './Navbar.css' 

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav) 


    return (
      
        <div  className='navbar bg-gradient-to-b from-black to-gray-800 fixed '>
            <div className="container">
                <div className="logo">
                  
                    <p className='text-5xl font-signature ml-2'>Mathias</p>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className='cursor-pointer'> <Link onClick={() => setNav(!nav)} to="home" smooth duration={500} > Home
                    </Link> 
                 </li>
                   <li className='cursor-pointer'> <Link onClick={() => setNav(!nav)} to="portfolio" smooth duration={500} > Portfolio
                    </Link> 
                 </li>
                   <li className='cursor-pointer'> <Link onClick={() => setNav(!nav)} to="experience" smooth duration={500} > Experience
                    </Link> 
                   </li>
                  <li className='cursor-pointer'> <Link onClick={() => setNav(!nav)} to="about" smooth duration={500}  > About
                    </Link> 
                   </li>
                   <li className='cursor-pointer'> <Link onClick={() => setNav(!nav)} to="contact" smooth duration={500} > Contact
                    </Link>  
                   </li>  
                 
                    </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
       
    )
}

export default Navbar












// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";  
// import "./Padding.css";

// const NavBar = () => {
  // const [nav, setNav] = useState(false);

  // const links = [
  //   {
  //     id: 1,
  //     link: "home", 
  //   },
  //   {
  //     id: 2,
  //     link: "about",
  //   },
  //   {
  //     id: 3,
  //     link: "portfolio",
  //   },
  //   {
  //     id: 4,
  //     link: "experience",
  //   },
  //   {
  //     id: 5,
  //     link: "contact",
  //   },
  // ];

//   return (
//     <div className="flex justify-between items-center w-full h-20 px-4  text-white bg-black fixed">
//       <div>
//         <h1 className="text-5xl font-signature ml-2">Mathias</h1>
//       </div>

//       <ul className="hidden md:flex">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
//           >
//             <Link to={link} smooth duration={500}>
//               {link}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div
//         onClick={() => setNav(!nav)}
//         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//       >
//         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
        
      
//       {nav && (
//         <ul className="  flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
//           {links.map(({ id, link }) => (
//             <>
//             <li
//               key={id}
//               className="      px-4 cursor-pointer capitalize py-6 text-4xl"
//             >
//               <Link
//                 onClick={() => setNav(!nav)}
//                 to={link}
//                 smooth
//                 duration={500}
//               >
//                 {link}
//               </Link> 
//             </li>
//            </>
//           ))}
//         </ul>
//       )}



//     </div>
//   );
// };

// export default NavBar;
