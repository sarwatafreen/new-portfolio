 import Link from "next/link";
 import IMAGE from "next/image";
import React from "react";
export default function About(){
    return(
        <div>

      {/* <header className="flex justify-between py-4 px-4 bg-green-800 text-white max-w--screen-2xl mx-auto">

     
      <div>
          <h1 className="font-samibold text-4xl text-blue-700"> PORTFOLIO</h1>
          </div> */}
           <nav>

         
              <ul className="hidden md:block">
                  <li className="space-x-4 py-4">
            <Link href="/">HOME</Link></li>
           <li> <Link href="/About">ABOUTME</Link></li>
          <li> <Link href="/skills">Skills</Link></li>
           <li> <Link href="/contactus">CONTACTUS</Link></li>
            </ul>
            </nav>
             
       <div className="flex justify-center ">
            <IMAGE src="/pic1.png" alt="about" width={700} height={700} />
            </div>
    {/* </header> */}
  </div>

    );
};