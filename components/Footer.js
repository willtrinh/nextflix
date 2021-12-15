import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
const Footer = () => {
  return (
    <Fragment>
      <div className='flex items-center content-center justify-center gap-4'>
        <h1 className='font-bold'>Powered by</h1>
        <Link href='https://www.themoviedb.org/'>
          <a className='header-link group'>
            <Image
              alt='data source'
              src={`https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg`}
              width={60}
              height={60}
            />
          </a>
        </Link>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/willtrinh'
        >
          <span className='font-bold'>Made with </span> ❤️ &amp; ☕
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
