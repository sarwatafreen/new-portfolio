import React from "react";
import Link from "next/link";
import { Menu }from"lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
export default function Header() {
  return (
        <header className="flex justify-between py-4 px-4 bg-green-800 text-white max-w--screen-2xl mx-auto">
        <div>
            <h1 className="font-samibold text-4xl text-blue-700"> PORTFOLIO</h1>
            </div>
            <div>
                <ul className="hidden md:block">
                    <li className="space-x-4 py-4">
              <Link href="/">HOME</Link>
             <Link href="/About">ABOUTME</Link>
              <Link href="/skills">SKILLS</Link>
           <Link href="/contactus">CONTACTUS</Link>
              </li>
              </ul>
              {/* <Menu /> */}
             <Sheet>
             
  <SheetTrigger className="md:hidden"><Menu/></SheetTrigger>
  <SheetContent >
     <ul>
                    <li className="space-x-5 py-4">
              <Link href="/">HOME</Link>
              <Link href="/about me">ABOUTME</Link>
              <Link href="/skills">SKILLS</Link>
              <Link href="/contant us">CONTACTUS</Link>
              </li>
              </ul>
     
  </SheetContent>
</Sheet>
              </div>
              </header>  
  );
};