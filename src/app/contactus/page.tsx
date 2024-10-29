import React from "react";
import Link from "next/link";

// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaGlobe,
// } from "react-icons/fa";

 export default function Contactus(){
    return(

<div>
  

    
         <div className="mb-30 py-16 px-20 bg-green-900">
        <div>
        <h2 className="flex justify-center text-black  text-6xl mb-6 font-bold">Contact Me</h2>
        </div>
            
        <div className=" flex justify-center mb-6">
        <h2 className="flex justify-left text-black  text-4xl mb-6 font-semibold">Via Email</h2>
      </div>
        <div>
          <nav>
        <ul className=  "  justify-center box-content h-32 w-32 p-4 border-4 font-2xl  hidden md:block">
                  <li className="  space-x-4 py-4">
            <Link href="/">HOME</Link></li>
           <li> <Link href="/about">ABOUTME</Link></li>
          <li> <Link href="/skills">SKILLS</Link></li>
           <li> <Link href="/contactus">CONTACTUS</Link></li>
            </ul>
            </nav>
        
        </div>


        <div>
        <h2 className="flex justify-center text-white  text-5xl mb-6 font-bold">Via Linkedin</h2>
        <Link href="https://www.linkedin.com/in/sarwatafreen-827262320/" target="_blank">
        <button className="flex justify-center bg-gray-600 text-black py-2 mt-4 px-4" >Message On Linkedin</button>
      </Link>
        </div>
     </div>
          <div className= "my-16 border-t border-gray-700  py-0">
      </div>
      
    
 
 </div>
 );
 }; 