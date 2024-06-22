import MovieCard from '@/components/MovieCard';
import React from 'react'

const Movie = async () => {
// console.log(params.id);

  const url = process.env.Rapid_url;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.rapidapi_key,
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    },
  };


  const response = await fetch(url, options);
  const result = await response.json();
  // console.log((result));
  const allEpisodes = result.reduce((acc, season) => {
    return acc.concat(season.episodes);
  }, []);
  // console.log((allEpisodes));

  // const data = result.episodes;
    // ye normal hota to a jata aise lekin ye normal nahi hai matalb jo humara episodes hai na vo do session ka hai isliye hume reduce use karna padha.
  // console.log(data);



  return (
    <>  
      <section className=' flex flex-col  justify-center items-center  sm:container sm:mx-auto'>
        <h1 className='text-2xl font-bold mb-4 text-center pb-3 mt-6'>Series & Movies</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-4 '>
          {allEpisodes.map((episodes, index) => {
            // console.log(item);
            return <MovieCard key={index} item={episodes} />
          })}
        </div>
      </section>

    </>
  )
}

export default Movie
