import React from 'react'
import Link from 'next/link'

const ContactCard = ({iconn , h2 , p1, p2 , lin }) => {
    return (
        <>
            <div className="">
                <div className="p-8 h-64 border border-gray-300 text-black bg-white rounded-lg shadow-lg">
                    <div className="text-center">
                        <i className="flex items-center justify-center text-4xl sm:text-6xl  text-blue-500 ">{iconn}</i>
                        <h2 className="font-bold text-xl mb-2">{h2}</h2>
                        <p>{p1}</p>
                        <p className='mb-7'>{p2}</p>
                        <Link href={"/"} className="text-blue-500 hover:underline">
                            {lin} <span>-&gt;</span>
                        </Link>
                    </div>
                </div>
             
            </div>

        </>
    )
}

export default ContactCard
