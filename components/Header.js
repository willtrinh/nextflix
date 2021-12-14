import Image from 'next/image';
import { HomeIcon, SearchIcon, FilmIcon } from '@heroicons/react/solid';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Search from './Search';

const Header = () => {
  const router = useRouter();

  return (
    <div className='sticky bg-home bg-cover shadow-2xl top-0 z-50 flex h-16 items-center px-10 md:px-6'>
      <Image
        src='/logo.png'
        alt='logo'
        width={116}
        height={23}
        className='cursor-pointer'
        onClick={() => router.push('/')}
      />
      <div className='hidden ml-10 md:flex items-center space-x-6'>
        <a className='header-link group' onClick={() => router.push('/')}>
          <HomeIcon className='h-6' />
          <span className='span'>Home</span>
        </a>

        <a className='header-link group' onClick={() => router.push('/movies')}>
          <FilmIcon className='h-6' />
          <span className='span'>Movies</span>
        </a>

        <a className='header-link group' onClick={() => router.push('/shows')}>
          <Image
            src='/images/series-icon.svg'
            width={24}
            height={24}
            alt='series-icon'
            className='h-6'
          />
          <span className='span'>Series</span>
        </a>

        <a className='header-link group'>
          <SearchIcon className='h-6' />
          <Search />
        </a>
      </div>
      <button
        className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'
        onClick={() => router.push('/auth/login')}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
