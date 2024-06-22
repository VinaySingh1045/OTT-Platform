import React from 'react';
import { FaGithub , FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-[#10456a] text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between items-center mb-8 w-full">
                    <div className="flex items-center">
                        {/*<i className="fab fa-slack"></i>*/}
                        <span className="text-2xl font-bold ml-2">OTT Platform</span>
                    </div> 
                    <div className="flex space-x-8 items-center ">
                     <span className='font-bold text-xl hidden lg:block'>Follow Me On</span>
                    <Link className='text-3xl' href="https://github.com/VinaySingh1045"><i><FaGithub  /></i></Link>
                        <Link className='text-3xl' href="https://twitter.com/VinaySingh_1045"><i><FaTwitter /></i></Link>
                        <Link className='text-3xl' href="https://www.instagram.com/vinaysingh9886/"><i><FaInstagram /></i></Link>
                        <Link className='text-3xl' href="https://www.linkedin.com/in/vinay-singh-13a50a238/"><i><FaLinkedinIn /></i></Link>
                        <Link className='text-3xl' href="https://www.youtube.com/@anastrophegamer3887"><i><FaYoutube /></i></Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <ul>
                        <li className="font-bold mb-2">Company</li>
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Contact us</a></li>
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Get started</a></li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-2">Services</li>
                        <li><a href="#" className="hover:underline">App design</a></li>
                        <li><a href="#" className="hover:underline">Web design</a></li>
                        <li><a href="#" className="hover:underline">Logo design</a></li>
                        <li><a href="#" className="hover:underline">Banner design</a></li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-2">Account</li>
                        <li><a href="#" className="hover:underline">Profile</a></li>
                        <li><a href="#" className="hover:underline">My account</a></li>
                        <li><a href="#" className="hover:underline">Preferences</a></li>
                        <li><a href="#" className="hover:underline">Purchase</a></li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-2">Known</li>
                        <li><a href="#" className="hover:underline">HTML & CSS</a></li>
                        <li><a href="#" className="hover:underline">JavaScript</a></li>
                        <li><a href="#" className="hover:underline">Reactjs</a></li>
                        <li><a href="#" className="hover:underline">Nextjs</a></li>
                    </ul>
                    <ul>
                        <li className="font-bold mb-2">Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" className="p-2 text-black rounded mb-2 w-[100%]" /></li>
                        <li> <button type="button" className="h-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Subscribe</button></li>
                    </ul>
                </div>
            </div>
            <div className=" flex flex-col gap-3  mt-8 sm:flex-row justify-center items-center border-t  pt-4">
                <span>Copyrights &copy;  {currentYear} <Link href="/" className="hover:underline">Vinay Technical.</Link>&nbsp; All rights reserved.</span>
                <div>
                    <Link href="/" className="hover:underline mr-4">&nbsp; Privacy policy</Link>
                    <Link href="/" className="hover:underline">| Terms & condition</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
