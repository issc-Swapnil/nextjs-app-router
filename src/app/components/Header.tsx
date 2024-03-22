"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC<{}> = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [collapse, setCollapse] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleCollapse = () => {
        setCollapse(!collapse)
    }

    return (
        <>
            <header>
                <nav className={`border-gray-200 px-4 lg:px-6 py-2.5 fixed w-full z-10 transition-all
                 ${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6 text-white"} `}>
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <Link href="/" className="flex items-center">
                            <Image src="../../logo.svg" className="mr-3 h-8 sm:h-12" alt="Logo"  width={50} height={50}/>
                            
                        </Link>
                        <div className="flex items-center lg:order-2">
                            <Link href="#" className="text-white bg-[#008dd2] focus:ring-4 focus:ring-[#0000ff] font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Get started</Link>
                            {/* <button data-collapse-toggle="mobile-menu-2" type="button"
                                onClick={handleCollapse}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden 
                                hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>  */}
                        </div>
                        {/* <div className={`${!collapse ? 'hidden' : 'block bg-white text-black'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link href="#" className="block py-2 pr-4 pl-3 t  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#0000ff] lg:p-0" aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#0000ff] lg:p-0">Company</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#0000ff] lg:p-0">Marketplace</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#0000ff] lg:p-0">Features</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#0000ff] lg:p-0">Team</Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#0000ff] lg:p-0">Contact</Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;