import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {

    return (
        <>
            <header
                className="fixed top-0 w-full  z-30 bg-white-500 transition-all shadow-md pt-0 pt-4"
            >
                <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                    <div className="col-start-1 col-end-2 flex items-center">
                        <h3>Flight</h3>
                    </div>
                    <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                        <Link
                            href="/about"
                            className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 a"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 a"
                        >
                            Contact
                        </Link>
                    </ul>
                    <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                        <Link href="/" className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                            Sign In
                        </Link>
                        <Link href="/" className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">

                            Sing Up
                        </Link>
                    </div>
                </nav>
            </header>
            {/* Mobile Navigation */}

            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
                <div className="bg-white-500 sm:px-3">
                    <ul className="flex w-full justify-between items-center text-black-500">
                    <Link
                            href="/about"
                            className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 a"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 a"
                        >
                            Contact
                        </Link>
                       
                    </ul>
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </>
    );
};

export default Header;