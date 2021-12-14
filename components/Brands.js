import Image from 'next/image';
const Brands = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1440px] mx-auto'>
      <div className='brand group'>
        <Image
          src='/images/disney.png'
          alt='disney-logo'
          layout='fill'
          objectFit='cover'
        />
        <video
          className='hidden group-hover:inline rounded-lg object-cover items-center justify-center mx-auto'
          autoPlay
          loop
          playsInline
        >
          <source src='/videos/disney.mp4' />
        </video>
      </div>
      <div className='brand group'>
        <Image
          src='/images/pixar.png'
          alt='pixar-logo'
          layout='fill'
          objectFit='cover'
        />
        <video
          autoPlay
          loop
          playsInline
          className='hidden group-hover:inline rounded-lg object-cover items-center justify-center mx-auto'
        >
          <source src='/videos/pixar.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='brand group'>
        <Image
          src='/images/marvel.png'
          alt='marvel-logo'
          layout='fill'
          objectFit='cover'
        />
        <video
          autoPlay
          loop
          playsInline
          className='hidden group-hover:inline rounded-lg object-cover items-center justify-center mx-auto'
        >
          <source src='/videos/marvel.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='brand group'>
        <Image
          src='/images/starwars.png'
          alt='starwars-logo'
          layout='fill'
          objectFit='cover'
        />
        <video
          autoPlay
          loop
          playsInline
          className='hidden group-hover:inline rounded-lg object-cover items-center justify-center mx-auto'
        >
          <source src='/videos/star-wars.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='brand group'>
        <Image
          src='/images/national-geographic.png'
          alt='national-geographic-logo'
          layout='fill'
          objectFit='cover'
        />
        <video
          autoPlay
          loop
          playsInline
          className='hidden group-hover:inline rounded-lg object-cover items-center justify-center mx-auto'
        >
          <source src='/videos/national-geographic.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
};

export default Brands;
