import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className='container mx-auto min-h-screen'>
                <h2 className='text-center font-bold text-2xl mt-20'>Page Not Found</h2>
                <p className='text-center font-bold text-2xl my-3'>Could not find requested resource</p>
                <div className='flex justify-center items-center' >
                    <Link href="/"  >
                        <button type="button" className="w-fit h-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Return Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}