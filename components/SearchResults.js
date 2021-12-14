import { useRouter } from 'next/router';
import SearchResultsItem from './SearchResultsItem';
import NotFound from './NotFound';

const SearchResults = ({ results, type, searchTerm }) => {
  const router = useRouter();
  return (
    <>
      {results.length === 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center font-bold pt-10'>{`Sorry, we couldn't find any results for "${searchTerm}" :(`}</h1>
          <NotFound />
          <button
            className='absolute bottom-16 text-white border-2 border-white uppercase px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
            onClick={() => router.push('/')}
          >
            Go back
          </button>
        </div>
      ) : (
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {results.map((item) => (
              <SearchResultsItem key={item.id} item={item} type={type} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
