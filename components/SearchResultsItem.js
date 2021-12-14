import Image from 'next/image';
import Link from 'next/link';

function SearchResultItem({ item, type }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  const releaseYear =
    item.release_date?.slice(0, 4) || item.first_air_date?.slice(0, 4);
  let mediaType;
  if (item.media_type === 'tv' || type === 'show') {
    mediaType = 'shows';
  }
  if (item.media_type === 'movie' || type === 'movie') {
    mediaType = 'movies';
  }

  let imageSource =
    `${BASE_URL}${
      item.backdrop_path || item.poster_path || item.profile_path
    }` || `${BASE_URL}${item.poster_path}`;

  if (
    imageSource === `https://image.tmdb.org/t/p/originalundefined` ||
    item.profile_path === null ||
    item.poster_path === null
  ) {
    const notFound = '/images/no-image-available.webp';
    imageSource = notFound;
  }

  return (
    <Link href={`/${mediaType}/${item.id}`} passHref>
      <a
        key={item.id}
        className='cursor-pointer  transform hover:scale-110 transition duration-300 rounded-lg
    '
      >
        <div
          className='relative w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:border-2 hover:border-white'
          // onClick={() => router.push(`/${mediaType}/${item.id}`)}
        >
          <Image
            src={imageSource}
            alt={item.title || item.name}
            width={600}
            height={800}
            objectFit='cover'
            className='object-center object-cover group-hover:opacity-75 rounded-lg '
          />

          <div className='absolute bottom-0 w-full h-full py-44 transition-all ease-in opacity-0 hover:opacity-100 font-bold text-white  text-center hover:scale-105 bg-black/50'>
            {releaseYear
              ? `${item.title || item.name} (${releaseYear})`
              : `${item.title || item.name}`}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default SearchResultItem;
