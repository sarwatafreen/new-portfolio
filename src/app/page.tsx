// import Link from "next/link";
import IMAGE from "next/image";
import React from "react";
export default function Home() {
  return ( 
    <main>
          <div className=" ml-100 mt-24 font-bold text-2xl">
            <h2>HI,i m SARWAT AFREEN <br/>And i am Graphic Desinger <br/> And Web Developer</h2>
      
          <div className="flex justify-end bg-white-100">
            <IMAGE src="/pic2.png" alt="about" width={500} height={500} />
            {/* <div>
            <nav>
        <ul className="hidden md:block">
                  <li className="space-x-4 py-4">
            <Link href="/">HOME</Link></li>
           <li> <Link href="/about">ABOUT ME</Link></li>
          <li> <Link href="/skills">Skills</Link></li>
           <li> <Link href="/contactus">CONTACTUS</Link></li>
            </ul>
            </nav>
            </div> */}
          </div>
          
            </div>
          </main>
  )

}