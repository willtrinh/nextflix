import { Fragment } from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

const SecretPage = () => {
  const { data: session } = useSession();

  return (
    <Fragment>
      <Head>
        <title>Nextflix | Secret Protected Page</title>
      </Head>
      <Header />
      {session ? (
        <section className='flex flex-col text-center items-center'>
          <h1 className='font-bold text-green-500'>Protected Page</h1>
          <div>
            This is protected content. You can access this content because you
            are signed in.
          </div>
        </section>
      ) : (
        <section className='flex flex-col text-center items-center'>
          <h1 className='font-bold text-red-500'>Access Denied</h1>
          <button onClick={() => signIn()}>
            You must be signed in to view this page
          </button>
        </section>
      )}
    </Fragment>
  );
};

export default SecretPage;
