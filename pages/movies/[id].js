import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/Header';
import { getMovieDetails } from '../../helpers/api-utils';
import {
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  XIcon,
} from '@heroicons/react/outline';
import ReactPlayer from 'react-player/lazy';

const MovieDetailPage = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const [isHovering, setIsHovering] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  const releaseYear = result.release_date.slice(0, 4);
  const releaseMonth = result.release_date.slice(5, 7);
  const releaseDay = result.release_date.slice(8, 10);

  const hours = Math.floor(result.runtime / 60);
  const minutes = result.runtime % 60;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  const budget = formatter.format(result.budget);

  const index = result.videos.results.findIndex(
    (element) => element.type === 'Trailer'
  );

  const imageSource =
    `${BASE_URL}${
      result.backdrop_path || result.poster_path || result.profile_path
    }` || `${BASE_URL}${result.poster_path}`;

  if (result.backdrop_path === null && result.poster_path === null) {
    const notFound = '/images/no-image-available.webp';
    imageSource = notFound;
  }

  return (
    <div>
      <Head>
        <title>{result.title || result.original_title}</title>
        <meta name='description' content={result.overview} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section className='relative z-50'>
        <div className='relative min-h-[calc(100vh-72px)]  bg-black/95'>
          <Image
            src={imageSource}
            alt={result.title}
            layout='fill'
            objectFit='cover'
            className='opacity-40'
            priority='true'
          />
        </div>
        <div className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>
            {result.title || result.original_title}{' '}
            <span className='font-thin text-gray-300'>{`(${releaseYear})`}</span>
          </h1>
          <div className='flex items-center space-x-3 md:space-x-5'>
            <button
              className='font-bold text-xs md:text-base bg-black/60 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-white hover:border-none hover:text-black transition duration-200 transform hover:scale-110'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={() => setShowPlayer(true)}
            >
              <Image
                src={
                  isHovering
                    ? '/images/play-icon-black.svg'
                    : '/images/play-icon-white.svg'
                }
                alt='trailer-icon'
                className='h-6 md:h-8'
                width={25}
                height={25}
              />
              <span className='uppercase font-medium tracking-wide'>
                Trailer
              </span>
            </button>
            <div>
              <span>
                {result.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className='inline-flex items-center justify-center px-2 py-1 mr-2 text-sm font-bold leading-5 text-white/90 bg-white/30 hover:bg-purple-500  cursor-pointer rounded-3xl transition duration-400 ease-in tracking-wide'
                  >
                    {genre.name}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <div className='text-xs md:text-sm font-bold flex items-center gap-2'>
            <CalendarIcon className='w-6 h-6' />
            Release date: {`${releaseMonth}/${releaseDay}/${releaseYear}`}
            <ClockIcon className='w-6 h-6' />
            Run time: {hours !== 0 ? `${hours}h ${minutes}m` : `${minutes}m`}
            <CurrencyDollarIcon className='w-6 h-6' />
            Budget: {budget}
          </div>
          <h2 className='font-semibold text-sm md:text-lg max-w-4xl border-b-2 pb-2 w-min'>
            Overview
          </h2>
          <h3 className='text-sm md:text-lg max-w-4xl'>{result.overview}</h3>
        </div>
        {showPlayer && (
          <div
            className='absolute inset-0 bg-black opacity-80 h-full w-full z-50'
            onClick={() => setShowPlayer(false)}
          ></div>
        )}

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? 'opacity-100 z-50' : 'opacity-0'
          }`}
        >
          <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
            <span className='font-semibold'>
              {result.title || result.original_title} Trailer
            </span>
            <div
              className='cursor-pointer w-15 h-15 flex justify-center items-center rounded-full opacity-50 hover:opacity-90 hover:bg-[#0F0F0F]'
              onClick={() => setShowPlayer(false)}
            >
              <XIcon className='h-8' />
            </div>
          </div>
          {showPlayer && (
            <div className='relative pt-[50%]'>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width='100%'
                height='100%'
                style={{ position: 'absolute', top: '0', left: '0' }}
                controls={true}
                playing={showPlayer}
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MovieDetailPage;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const movieData = await getMovieDetails(id);
  return {
    props: {
      result: movieData,
    },
  };
}
