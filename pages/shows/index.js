import { useState } from 'react';
import Header from '../../components/Header';
import Head from 'next/head';
import { getShows } from '../../helpers/api-utils';
import SearchResults from '../../components/SearchResults';
import InfiniteScroll from 'react-infinite-scroll-component';

const ShowsPage = ({ shows }) => {
  const [results, setResults] = useState(shows);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async () => {
    const res = await fetch('/api/fetch?query=tv');
    const data = await res.json();
    const newMovies = data.results;
    if (data.results) {
      setResults([...results, ...newMovies]);
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
      <Head>
        <title>Nextflix | TV Shows</title>
      </Head>
      <Header />
      <InfiniteScroll
        dataLength={results.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p className='text-center mx-auto my-10'>
            <b>Stop binge watching tv series...Go make some friends!</b>
          </p>
        }
      >
        <SearchResults results={results} type='tv' />
      </InfiniteScroll>
    </>
  );
};

export default ShowsPage;

export async function getServerSideProps() {
  const moviesData = await getShows();

  return {
    props: {
      shows: moviesData.results,
    },
  };
}
