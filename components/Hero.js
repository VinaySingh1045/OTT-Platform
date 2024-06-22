import React from 'react';
import Link from 'next/link';
import styless from '@/app/styles/common.module.css'


const Hero = ({ title, imageurl, para }) => {
    return (
        <>
       {/* */}
            <div className='bg-gradient-to-r from-pink-200 via-blue-200 to-blue-200  min-h-[69.5vh] my-6 '>
                <div className='flex flex-col md:flex-row items-center justify-center p-8 2xl:pl-48 pl-0 md:gap-2 gap-0 md:p-28'>
                    <div className="left w-full md:w-[50%] text-center md:text-left md:mr-auto md:ml-0">
                        <h1 className='text-3xl md:text-5xl font-bold pb-4'>{title}</h1>
                        <p className='mb-8 text-slate-900'>{para}</p>
                        <Link href={"/movie"}>
                            <button type="button" className="h-14 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore Movies</button>
                        </Link>
                    </div>
                    <div className="right w-full md:w-[45%] flex justify-center md:justify-end">
                        <img className='h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-[500px] lg:pr-20 ' src={imageurl} alt="Home" />
                    </div>
                </div>
                {/* <div className="{styless['custom-shape-divider-bottom-1718260043']}">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="{styless['shape-fill']}"></path>
                    </svg>
                </div> */}
            </div>
        </>
    );
}

export default Hero;
