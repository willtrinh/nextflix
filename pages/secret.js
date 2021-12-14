import Header from '../components/Header';
import { useSession, signIn, signOut } from 'next-auth/react';

const Secret = () => {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {session ? (
        <section>
          <h1>Protected Page</h1>
          <div>
            This is protected content. You can access this content because you
            are signed in.
          </div>
        </section>
      ) : (
        <section>
          <h1>Access Denied</h1>
          <button onClick={() => signIn()}>
            You must be signed in to view this page
          </button>
        </section>
      )}
    </>
  );
};

export default Secret;
