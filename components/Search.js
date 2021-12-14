import { useRef, useState } from 'react';

import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  const searchTermRef = useRef();

  const [error, setError] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const searchTerm = searchTermRef.current.value;

    if (!searchTerm) {
      setError(true);
    } else {
      router.push(`/results?query=${searchTerm}`);
      setError(false);
    }
  }

  return (
    <form
      className='flex justify-center items-center justify-items-center'
      onSubmit={submitHandler}
    >
      <span className='span'>
        <input
          type='text'
          placeholder={
            !error
              ? 'Search for movies and tv series...'
              : 'Please enter something to search...'
          }
          size={30}
          className={
            !error
              ? 'bg-transparent outline-none font-semibold'
              : 'bg-transparent outline-none placeholder:text-red-500 placeholder:font-semibold'
          }
          ref={searchTermRef}
          onChange={() => setError(false)}
        />
      </span>
    </form>
  );
};

export default Search;
