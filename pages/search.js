import { Fragment } from 'react';
import Header from '../components/Header';
import Head from 'next/head';
const SearchPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Nextflix | Search</title>
      </Head>
      <Header />
    </Fragment>
  );
};

export default SearchPage;
