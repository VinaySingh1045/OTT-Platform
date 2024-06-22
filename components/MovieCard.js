import React from 'react'
import Link from 'next/link'
const MovieCard = ({ item }) => {

    // const { id, type, title, text } = item.episodes

    return (
        <>

            <div className='border border-gray-300 sm:w-64 w-[100%]  rounded-lg shadow-lg mb-6'>
                <div className='overflow-hidden rounded-t-lg'>
                    <img className='w-full h-[18rem] sm:h-48 object-cover object-center' src={item.interestingMoment._342x192.webp.value.url} alt="Movie Poster" />
                </div>
                <div className='p-4'>
                    <h1 className='text-xl font-semibold mb-2'>{`${item.title.substring(0,22)} ...`}</h1>
                    <p className='text-gray-600 mb-4'>{`${item.contextualSynopsis.text.substring(0,66)} ...`}</p>
                    <Link href={`movie/${item.summary.id}`} >
                        <button type="button" className="w-full h-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Read More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MovieCard
