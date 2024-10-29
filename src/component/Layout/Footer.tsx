import React from "react";
// import Link from "next/link";
 
  

export default function Footer(){
  return(
  <footer className='flex justify-between  bg-black py-6 px-4 text-white sticky top-0 items-center'>
            

                       <div className="flex justify-between">
                      <ul className="flex justify-between gap-9 ">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
                <div className="social-links">
                               <a href="#" className="social-icon">
                                  <i className="fab fa-facebook"></i>
                                                    </a>
                                            <a href="#" className="social-icon">
                                   <i className="fab fa-twitter"></i>
                                                   </a>
                                              <a href="#" className="social-icon">
                                  <i className="fab fa-instagram"></i>
                                   </a>
                                                </div>
            
            </div>
            <div className=" flex justify-around flex-row footer-bottom">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div> 
        </footer>
    );
    };