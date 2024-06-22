import React from 'react';
import Link from 'next/link';

const Page = async ({ params }) => {
  const episodeId = params.id; 
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${episodeId}&lang=en`; 

  const options = {
    method: 'GET',
    headers: {
      
      'x-rapidapi-key': process.env.rapidapi_key,
      'x-rapidapi-host': 'netflix54.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return (
      <div className="mb-40 p-4">
        <h2 className="text-3xl mb-5 font-semibold text-center">Type/Show</h2>
        <div className="flex flex-col justify-around items-center gap-4">
          <img
            src={result[0].details.backgroundImage.url}
            alt="Stranger Things"
            className="object-cover lg:h-[25rem] lg:w-[55rem]"
          />
          <h3 className=" text-2xl font-bold">{result[0].details.title}</h3>
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-sm mb-2 text-center">
              {result[0].details.synopsisRegular}
            </h1>
            <p className="text-gray-600 font-semibold text-center ">
              {result[0].details.synopsisRegular}
            </p>
          </div>
        </div>
        <div className="mt-16"></div><Link href={"/movie"}>
          <button type="button" className="h-14 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore Movies</button>
        </Link>
      </div>

    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error fetching data</div>;
  }
};

export default Page;

