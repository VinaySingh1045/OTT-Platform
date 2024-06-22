"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="flex justify-between items-center px-20 p-8 bg-[#eff4fb]">
                <Link href="/">
                    <div className="logo font-bold text-2xl">OTT/Logo</div>
                </Link>
                <ul className="hidden md:flex items-center justify-center gap-4 font-bold text-xl">
                    <Link href="/">
                        <li className="hover:text-red-600">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="hover:text-red-600">About</li>
                    </Link>
                    <Link href="/movie">
                        <li className="hover:text-red-600">Movies</li>
                    </Link>
                    <Link href="/contact">
                        <li className="hover:text-red-600">Contact US</li>
                    </Link>
                </ul>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <ul className="md:hidden flex flex-col items-center justify-center gap-4 font-bold">
                    <Link href="/">
                        <li className="hover:text-red-600">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="hover:text-red-600">About</li>
                    </Link>
                    <Link href="/movie">
                        <li className="hover:text-red-600">Movies</li>
                    </Link>
                    <Link href="/contact">
                        <li className="hover:text-red-600">Contact US</li>
                    </Link>
                </ul>
            )}
        </>
    );
};

export default Navbar;
