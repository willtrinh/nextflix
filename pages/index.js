import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Brands from '../components/Brands';
import Movies from '../components/Movies';
import Shows from '../components/Shows';
import { getMoviesAndShows } from '../helpers/api-utils';
import Footer from '../components/Footer';

export default function Home({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) {
  return (
    <Fragment>
      <Head>
        <title>Nextflix | Home</title>
        <meta
          name='description'
          content="Nextflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]'>
        <Slider />
        <Brands />
        <Movies results={popularMovies} title='Trending Movies' />
        <Shows results={popularShows} title='Hit Shows' />
        <Movies results={topRatedMovies} title='Top Rated Movies' />
        <Shows results={topRatedShows} title='Top Rated TV Shows' />
      </main>
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await getMoviesAndShows();
  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topRatedMovies: topRatedMovies.results,
      topRatedShows: topRatedShows.results,
    },
  };
}
