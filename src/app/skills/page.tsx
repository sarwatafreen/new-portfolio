import React from "react";
import Link from "next/link";
export default function skills(){
       
            return (
              <div>
                <div className=" flex justify-center font-semibold text-6xl ">
                  <h1 className="flex-2"> MY SKILLS</h1>
                </div>
                
                {/* <ul className="hidden md:block">
                  <li className="space-x-4 py-4">
            <Link href="/">HOME</Link>
            <Link href="/aboutme">ABOUTME</Link>
           <Link href="/skills">Skills</Link>
            <Link href="/contactus">CONTACTUS</Link>
            </li>
            </ul> */}
                          <div className="flex-row bg-green-300">
                       <div className="flex-row">
                  <div className=" bg- gray-100 p-6 flex flex-row items-center service-card">
                    <div className=" flex-1 mr-6 card-icon">
                      <i className="fas fa-calendar"></i>
                    </div>
                    <div className="flex-2 ">
                    <h3 className=" text-4xl  font-bold mb-4 card-title">HTML</h3>
                    <p className=" text-gray-700 text-sm card-description">
                      We all use HTML daily,<br/>even if we don’t realize it. <br/>It’s the backbone of every<br/> website,
                      providing structure<br/> and meaning to content <br/>on the web. Whenever you read<br/> an article,
                      watch a video, or shop<br/> online, HTML is there behind the <br/>scenes, organizing text, images,<br/>
                      and links to create a seamless <br/>experience. Simple yet powerful,<br/> HTML is a universal language
                      that <br/>connects us to information, entertainment,<br/> and each other on the internet.<br/>
                    </p>
                    <Link href="/html-services">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded card-button">Read </button>
                    </Link>
                    </div>
                  </div>
                  <div className=" bg- gray-100 p-6 flex flex-row items-center service-card">
                    <div className=" flex-1 mr-6 card-icon">
                      <i className="fas fa-wrench"></i>
                      <div className="flex-row">
                    </div>
                    <div className="flex-2 ">
                    <h3 className=" text-4xl font-bold mb-4 card-title">TypeScript</h3>
                    <p className=" text-gray-700 text-sm card-description">
                      TypeScript is a programming language that builds<br/> on JavaScript by adding static
                       typing, which<br/> makes it easier to catch errors early in <br/>development.
                      Developed by Microsoft,<br/> TypeScript is often used in large-scale<br/> applications,
                       as its type-checking helps<br/> prevent bugs and improves code readability. <br/>
                       It compiles down to plain JavaScript,<br/> so it can run in any environment
                        where<br/> JavaScript is supported, like web browsers<br/> and Node.js.
                      TypeScript also brings modern<br/> JavaScript features to older platforms,<br/>
                      </p>
                    <Link href="/typescript-services">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded card-button">Read </button>
                    </Link>
                  </div>
                  
                  
                  <div className=" bg- gray-100 p-6 flex flex-row items-center service-card">
                    <div className="flex-1 mr-6 card-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div className=" ">
                    <h3 className=" text-4xl font-bold mb-4 card-title">Next.js</h3>
                    <p className="flex text-gray-700 text-sm card-description">
                      Next.js is a powerful React framework <br/>that simplifies building fast, 
                      scalable web<br/> applications by providing features like <br/>server-side rendering (SSR), 
                      static site <br/>generation (SSG), and API routes out <br/>of the box. Developed by Vercel,<br/>
                       Next.js allows developers to create <br/>dynamic and SEO-friendly pages with <br/>minimal setup,
                        enhancing performance <br/>and user experience. Its routing system,<br/> automatic code splitting, 
                        and optimized<br/> image handling make it ideal for both<br/> small projects and large-scale<br/> applications.
                      With Next.js, <br/>developers can focus on<br/> building engaging interfaces, while<br/> the framework takes care
                       of backend<br/> processes and deployment efficiency.<br/>
                    </p>
                    <Link href="/nextjs-services">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedcard-button">Read</button>
                    </Link>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
            
                </div> 
              
            );
          };
          
       