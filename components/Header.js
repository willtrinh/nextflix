import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, SearchIcon, FilmIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import Search from './Search';

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className='sticky bg-home bg-cover shadow-2xl top-0 z-50 flex h-16 items-center px-10 md:px-6'>
      {/* <Link href='/' passHref>
        <Image
          src='/logo.png'
          alt='logo'
          width={116}
          height={23}
          className='cursor-pointer'
        />
      </Link> */}

      <div className='hidden ml-10 md:flex items-center space-x-6'>
        <Link href='/'>
          <a className='header-link group'>
            <HomeIcon className='h-6' />
            <span className='span'>Home</span>
          </a>
        </Link>
        <Link href='/movies'>
          <a className='header-link group'>
            <FilmIcon className='h-6' />
            <span className='span'>Movies</span>
          </a>
        </Link>
        <Link href='/shows'>
          <a className='header-link group'>
            <Image
              src='/images/series-icon.svg'
              width={24}
              height={24}
              alt='series-icon'
              className='h-6'
            />
            <span className='span'>Series</span>
          </a>
        </Link>

        <a className='header-link group'>
          <SearchIcon className='h-6' />
          <Search />
        </a>
      </div>
      {session ? (
        <div className='flex md:text-sm items-center ml-auto gap-6'>
          <div className='flex items-center justify-items-center gap-4'>
            Hi, {session.user.name}{' '}
            <Image
              src={session.user.image}
              alt='user-image'
              width={40}
              height={40}
              className='rounded-full'
            />
          </div>
          <button
            className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
